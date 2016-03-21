

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
declare var Log: {
    Message(message: string, additional?: string, priority?: number, attributes?: LogAttributes, picture?: any): void;
    Warning(message: string, additional?: string, priority?: number, attributes?: LogAttributes, picture?: any): void;
    Error(message: string, additional?: string, priority?: number, attributes?: LogAttributes, picture?: any): void;
    Picture(picture: any, message: string, additional?: string, priority?: number, attributes?: LogAttributes): void;
    CreateNewAttributes(): LogAttributes;
    AppendFolder(message: string, additional?: string, priority?: number, attributes?: LogAttributes, picture?: any): void;
    PopLogFolder(): void;
};


/** "aq" utility objects */
declare var aqObject: {
    IsSupported(obj: any, member: string): boolean;
}

declare var aqString: {
    Format(format: string): string;
}

declare var Aliases: {
    RefreshMappingInfo(): void;
    WaitAliasChild(childName: string, waitTime?: number): any;
    WaitProperty(name: string, value: any, waitTime?: number): boolean;
}

interface  BrowserInfo {
    Navigate(url: string, waitTime?: number): void;
    Run(url?: string, waitTime?: number): void;
}

declare var Browsers: {
    Count: number;
    Item(BrowserType: any, Version?: string, Platform?: number): BrowserInfo;
}

declare var btChrome: number;

declare var Sys: any;

/**
 * JScript function that requests resource cleanup
 */
declare var CollectGarbage(): void;
