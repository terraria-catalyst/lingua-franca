using Terraria;
using Terraria.ModLoader;

namespace TeamCatalyst.BetterFontSupport;

public sealed class BetterFontSupportMod : Mod {
    public override void Load() {
        base.Load();
        Main.OnTickForThirdPartySoftwareOnly += () => { };
    }
}
