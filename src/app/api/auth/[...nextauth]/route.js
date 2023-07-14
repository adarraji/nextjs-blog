import User from "@/models/User"
import connect from "@/utils/db"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import bcrypt from "bcryptjs";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        CredentialsProvider({
            id: "credentials",
            name: "credentials",
            async authorize(credentials) {

                await connect()

                try {
                    const user = User.findOne({ email: credentials.emaail })
                    if (user) {
                        //check password
                        const isPasswordCorrect = bcrypt.compare(credentials.password, user.password)
                        if (isPasswordCorrect) {
                            return user
                        } else {
                            throw new Error("Wrong Credentials")
                        }
                    } else {
                        throw new Error("User not found")
                    }

                } catch (err) {
                    throw new Error(err)
                }

            }
        })
    ],
})

export { handler as GET, handler as POST }