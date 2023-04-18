import { rest } from "msw";

const baseURL = "https://ci-taskmanager-quack.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 6,
        username: "Finis",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 6,
        profile_image:
          "https://res.cloudinary.com/dmqanpuaz/image/upload/v1/media/images/IMG-20180725-WA0003_bwc5rt",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (res, req, ctx) => {
    return res(ctx.status(200))
  })
];
