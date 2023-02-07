import { generateAvailableUsername } from "@wasp/core/auth.js";

export async function getUserFields(_context, args) {
    const username = await generateAvailableUsername(
        args.profile.displayName.split(" "),
        { separator: "." }
    );
    const profilePicture = args.profile.photos[0].value;
    return { username, profilePicture };
}
