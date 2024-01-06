export const publicizer = createPublicizer("BetterFontSupport");

const tmodloader = publicizer.createAssembly("tModLoader");
tmodloader.allowVirtuals();
tmodloader.publicizeAll();
