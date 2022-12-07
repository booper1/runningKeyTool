export class Global {
    public static light: any;
    public static dark: any;

    public static toggleTheme(): void {
        Global.light != null ? Global.light.classList.toggle('show') : console.log("Undefined");
        Global.dark != null ? Global.dark.classList.toggle('show') : console.log("Undefined");

        if (document.documentElement.getAttribute('data-theme') !== 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('data-theme', 'light');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('data-theme', 'dark');
        }
    }
}
