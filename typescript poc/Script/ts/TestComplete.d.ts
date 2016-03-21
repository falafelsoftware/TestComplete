
/** Returned from Log.CreateNewAttributes */
interface LogAttributes {
    BackColor?: number,
    Bold?: boolean,
    ExtendedMessageAsPlainText?: boolean,
    FontColor?: number,
    Italic?: boolean,
    StrikeOut?: boolean,
    Underline?: boolean
}

/** Partial wrapper for TestComplete Log object */
interface Log {
    Message(message: string, additional?: string, priority?: number, attributes?: LogAttributes, picture?: any): void;
    Warning(message: string, additional?: string, priority?: number, attributes?: LogAttributes, picture?: any): void;
    Error(message: string, additional?: string, priority?: number, attributes?: LogAttributes, picture?: any): void;
    Picture(picture: any, message: string, additional?: string, priority?: number, attributes?: LogAttributes): void;
    CreateNewAttributes(): LogAttributes;
    AppendFolder(message: string, additional?: string, priority?: number, attributes?: LogAttributes, picture?: any): void;
    PopLogFolder(): void;
}
declare var Log: Log;

/** "aq" utility objects */
interface aqObject {
    IsSupported(obj: any, member: string): boolean;
}
declare var aqObject: aqObject;

interface aqString {
    Format(format: string): string;
}
declare var aqString: aqString;

interface Aliases {
    RefreshMappingInfo(): void;
    WaitAliasChild(childName: string, waitTime?: number): any;
    WaitProperty(name: string, value: any, waitTime?: number): boolean;
}
declare var Aliases: Aliases;

interface BrowserInfo {
    Navigate(url: string, waitTime?: number): void;
    Run(url?: string, waitTime?: number): void;
}

interface Browsers {
    Count: number;
    Item(BrowserType: number, Version?: string, Platform?: number): BrowserInfo;
    CurrentBrowser: BrowserInfo;
}
declare var Browsers: Browsers;

declare var Sys: any;
