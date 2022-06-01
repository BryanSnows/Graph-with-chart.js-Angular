export interface VersionData{
     version: string,
     users: number,

}

export interface Hero {
     browser: string;
     color: string; 
     marketshare: number;
     //versionData: { version: string; users: number; }[]; 
     versionData: VersionData;
}

