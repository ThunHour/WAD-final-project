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
      callbackURL: "https://api.customize.kunapheap.com/main/google/callback",
    },
    async function (
      accessToken: any,
      refreshToken: any,
      profile: any,
      done: any
    ) {
      // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //   return cb(err, user);
      // });
      const newUser = {
        googleId: profile.id,
        displayName: profile.displayName,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        image: profile.photos[0].value,
      };
      try {

        const user = await prisma.user.findUnique({
          where: { email: profile.emails[0].value },
        });
        if (user != null) {
          const checkPassword = await comparePassword(profile.id, user?.google_password ?? "");
          if (!checkPassword) {
            done(null, {
              accessToken: "",
              refreshToken: "",

            });
          }
          const token = await jwt.jwtGenerator(user);
          done(null, token);
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
