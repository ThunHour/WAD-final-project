import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import { PrismaClient, User } from "@prisma/client";
const prisma = new PrismaClient();
import jwt from "../../util/jwt-generate";
import { comparePassword } from "../../util/passwordEncrypter";
passport.use(
  new GoogleStrategy.Strategy(
    {
      clientID:
        "840765250179-vdislfv0skqurjvd6omteuhfa6bjc7pb.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "https://api.cipherzernia.tech/main/google/callback",
    },
    async function (

      profile: any,
      done: any
    ) {
      try {

        const user = await prisma.user.findUnique({
          where: { email: profile.emails[0].value },
        });
        if (user != null) {
          if (user.google_password == null) {
            await prisma.user.update({
              where: { email: profile.emails[0].value },
              data: {
                google_password: profile.id,
              },
            }); const token = await jwt.jwtGenerator(user);
            done(null, token);
          } else {
            const checkPassword = await comparePassword(profile.id, user?.google_password!);
            if (!checkPassword) {
              const token = await jwt.jwtGenerator(user);
              done(null, token);

            } else {
              done(null, {
                accessToken: "",
                refreshToken: "",
              });
            }
          }
        } else {
          const addUser = await prisma.user.create({
            data: {
              email: profile.emails[0].value,
              name: profile.name.givenName as string,
              google_password: profile.id,
            },
          });
          const token = await jwt.jwtGenerator(addUser);
          done(null, token);

        }

      } catch (error) {
        console.error(error);
      }
    }
  )
);

passport.serializeUser(function (user: any, done: any) {
  if (user.accessToken) {
    done(null, user.accessToken);
  } else {
    done(null, user);
  }
});

passport.deserializeUser((user: any, done: any) => {
  if (user.accessToken) {
    done(null, user.accessToken);
  } else {
    done(null, user);
  }
});
