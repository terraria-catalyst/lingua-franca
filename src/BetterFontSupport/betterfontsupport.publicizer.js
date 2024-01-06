/* This is a JavaScript-powered type publicizer for the Catalyst build tool.
 * You can use it like so:
 *
 * // Publicizer is a module supplied by Catalyst.
 * import { createPublicizer } from "publicizer";
 * 
 * // You should export a value named 'publicizer', retrieved from the imported
 * // 'createPublicizer' method, as that is what's processed.
 * export const publicizer = createPublicizer("MyMod");
 * 
 * // We define an assembly here. In this case, it's 'tModLoader'. You should
 * // leave out the .dll extension.
 * const tmodloader = publicizer.createAssembly("tModLoader");
 * 
 * // If you want to publicize all types and members in an assembly, you can
 * // call the 'publicizeAll' method on the assembly:
 * tmodloader.publicizeAll();
 * 
 * // Virtuals normally aren't publicized due to issues at runtime. You can
 * // bypass this safety feature like so:
 * tmodloader.allowVirtuals();
 * 
 * // If you don't want to publicize everything, and instead prefer specific
 * // control over individual types and members, you can define types:
 * const main = tmodloader.createType("Terraria.Main");
 * 
 * // You can then publicize the type, all members within a type, or specific
 * // members within a type:
 * 
 * main.publicizeType(); // Publicizes the type itself.
 * main.publicizeMembers(); // Publicizes all members within the type.
 * main.publicizeField("myField"); // Publicizes a field named 'myField'.
 * main.publicizeProperty("myProperty"); // Publicizes a property named 'myProperty'.
 * main.publicizeEvent("myEvent"); // Publicizes an event named 'myEvent'.
 * main.publicizeMethod("myMethod"); // Publicizes a method named 'myMethod'.
 */

import {createPublicizer} from "publicizer";

export const publicizer = createPublicizer("BetterFontSupport");

publicizer.createAssembly("tModLoader").allowVirtuals().publicizeAll();
