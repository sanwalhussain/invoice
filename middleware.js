export { default } from "next-auth/middleware";

export const config = { matcher: ["/invoice", "/invoice/details/[id]"] };
