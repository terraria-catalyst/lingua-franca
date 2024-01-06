using JetBrains.Annotations;
using Terraria;
using Terraria.ModLoader;

namespace TeamCatalyst.BetterFontSupport;

[UsedImplicitly(ImplicitUseKindFlags.InstantiatedWithFixedConstructorSignature)]
public sealed class BetterFontSupportMod : Mod {
    public override void Load() {
        base.Load();
        Main.OnTickForThirdPartySoftwareOnly += () => { };
    }
}
