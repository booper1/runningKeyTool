export class Global {
    public static author: string = "Booper_1";
    public static theme: string = "themeMono";

    // Styles
    public static themeMono_bg = "#333333";
    public static themeMono_text = "#ffffff";
    public static themeSynth_bg = "#241235";
    public static themeSynth_text = "#ea088b";

    public static topBun: any;
    public static patty: any;
    public static botBun: any;
    public static sidebar: any;
    public static clickNet: any;
    public static nav: any;
    public static main: any;
    public static light: any;
    public static dark: any;

    public static navOpen: boolean = true;
    public static darkMode: boolean = true;

    public static toggleNav(): void {
        Global.topBun != null ? Global.topBun.classList.toggle('angle') : console.log("Undefined");
        Global.patty != null ? Global.patty.classList.toggle('hide') : console.log("Undefined");
        Global.botBun != null ? Global.botBun.classList.toggle('angle') : console.log("Undefined");
        Global.sidebar != null ? Global.sidebar.classList.toggle('push') : console.log("Undefined");
        Global.clickNet != null ? Global.clickNet.classList.toggle('enabled') : console.log("Undefined");
        Global.nav != null ? Global.nav.classList.toggle('show') : console.log("Undefined");
        Global.main != null ? Global.main.classList.toggle('blur') : console.log("Undefined");
        Global.navOpen = !Global.navOpen;
    }

    public static toggleTheme(): void {
        Global.light != null ? Global.light.classList.toggle('show') : console.log("Undefined");
        Global.dark != null ? Global.dark.classList.toggle('show') : console.log("Undefined");

        if (Global.darkMode) {
            document.documentElement.setAttribute('data-theme', 'light');
            Global.darkMode = !Global.darkMode;
        }
        else {
            document.documentElement.setAttribute('data-theme', 'dark');
            Global.darkMode = !Global.darkMode;
        }
    }
}
