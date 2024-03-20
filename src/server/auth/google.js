// TODO: Removed  from "@wasp/core/auth" import because it is deprecated and has no clear alternative. Please check migration instructions in Wasp docs on how to manually migrate the code that was using it.
// TODO: Removed `generateAvailableUsername` from "@wasp/core/auth" import because it is deprecated and has no clear alternative. Please check migration instructions in Wasp docs on how to manually migrate the code that was using it.
export async function getUserFields(_context, args) {
    const username = await generateAvailableUsername(
        args.profile.displayName.split(" "),
        { separator: "." }
    );
    const profilePicture = args.profile.photos[0].value;
    return { username, profilePicture };
}
