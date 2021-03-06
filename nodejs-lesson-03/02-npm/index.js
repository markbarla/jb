//npm - node package manager;
//------------------------------------------------------------------
/*
    מבית מייקרוסופט GitHub חברת בת של
    מאפשרת להשתשמש בחבילות למפתחים
    בדפדפן עם גאווה סקריפט או במחשב בסביבת נואד

    בתיקיה שבה נמצא הפרוייקט ושימוש בפקודות מובנות command line עיקר העבודה בסביבת
    npm -v
    check the npm version;

    npm init
    --------
    package.json הפקודה הראשונה יוצרת קובץ
    npm לאחר מכן אפשר להתחיל לעבוד עם

    package.json
    --------
    קובץ בפורמט גייסון
    שמכיל מידע עבור הפרוייקט שלנו
    כמו השם של הפרוייקט שלנו, חבילות שהפרוייקט שלנו משתשמש בהם שיש להתקין אותם כדי שיעבוד כראוי
    הגרסאות שלהם
    ועוד ועוד

    *intro - npm search;
    
    npm install [somePackage]
    --------
    מתקין את החבילה בתוך התיקיה של הפרוייקט
    node_modules נוצרת תיקיה מיוחדת שנקראת
    והחבילה תותקן בתוך התיקיה
    מודול שירצה להתשמש בחבילה יצטרך לייבא אותה

    npm install -g [somePackage]
    --------
    מתקין את החבילה ברמה הכללית במחשב ונגיש מתוך כל התיקיות
*/



//package.json - dependencies vs devDependencies;
//------------------------------------------------------------------
/*
    {
        "name": "06-npm", שם
        "version": "1.0.0", גרסא
        "description": "", תאור הפרוייקט
        "dependencies": {},  חבילות דרושות לעבודה בייצור
        "devDependencies": {}, חבילות הדרושות לפיתוח מקומי או טסטים
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
    }

    dependencies - חבילות שהאפליקציה לא תוכל לעבוד בילדיהם בייצור
    devDependencies -
    חבילות כמו טסטים
    או בעיקר חבילות בקליינט שהקוד שלהם נכנס הופך להיות חלק מהקוד של ראקט או אנגולר
    בזמן הבניה ואין צורך בסיפריה המלאה
    או חבילות שאחראיות לבניה של האפליקציה
    https://github.com/angular/components/blob/master/package.json

    add dependencies:
    1 להריץ פקודה מה שעושים בדרך כלל
    will add to dependencies:
    npm i upper-case
    npm i upper-case --save
    npm i upper-case --save-prod

    will add to devDependencies;
    npm i upper-case --save-dev

    2 להוסיף ידני לתוך הקובץ
    "dependencies": {
        "upper-case": "^2.0.2"
    },
---
***
    שאלות הבנה:
    ? test package
    ? build package
    ? typescript package
    ? code lint package
***
*/



package.json - versions;
//------------------------------------------------------------
/*
"react-color":"*.*.*"
הגרסא מורכבת מ 3 מספרים שמופרדים על ידי נקודות
המספר הימני ביותר - מציין תיקון באגים ויחסית בטוח לעדכון
המספר האמצעי - מציין הוספה של פיצרים או שינויים אך יש להיזהר לא לשבור את המערכת שלנו כתוצאה מהשינוי
המספר השמאלי - מציין שינויים שיכולים לשבור מערכת קיימת, לכן חייבים לבדוק תאימות לפני עדכון

 גרסא ספציפית יתקין בדיוק את הגרסא
 "react-color":"2.17.0"

 "react-color":"~2.17.0"
 [~] שימוש ב
 הגרסא העדכנית ביותר מבחינת המספר הימני
 אם קיים 2.17.3 יביא לי במקום 2.17.0

 [^] שימוש ב
 "react-color":"^2.17.0"
 הגרסא העדכנית ביותר מבחינת המספר האמצעי
 אם קיים 2.19.0 אז יביא לי אותו במקום

 [*] שימוש ב
 "react-color":"*"
 יתקין את הגרסא העדכנית ביותר שקיימת

 npm list
 npm list -g

 !מה יש לקחת בחשבון כשמתקינים חבילות
 כשאנחנו משתמשים בחבילה אנחנו מסתמכים על הקוד שלה
 אם היה שינוי משמעותי הפרוייקט שלנו עלול להפסיק לעבוד בגלל
 עדכון בחבילה מסויימת, משתמשים בהרבה חבילות כך שיכולות להיות הרבה סיבות
 עכשיו לך תחפש איפה הבעיה

 ? אז איך עושים את זה נכון
 מתי נרצה לעדכן חבילות ? 
 1 כשיש פיצרים חדשים שנרצה להשתשמש, כדי שהאפליקציה שלנו מודרנית
 2 כאשר יש בעיות אבטחה וצריך לעדכן גרסאות כדי למנוע פרצות
    
 package-lock.json 
 הקובץ נוצר כאשר מתקינים חבילות או מבצעים שינוי
 node_modules הוא מכיל בתוכו את הגרסאות המדוייקות שמותקנות בתיקיה ה 
 הקובץ מיועד להיות בשרת שבו האפליקציה רצה בדרך כלל 
 בעיקר חשוב בייצור 
 למה ? כי הוא שומר שההתקנה של החבילות תהיה מדוייקת לפי הגרסאות בקובץ  ולא יהיו עדכונים אוטומתיים
    
 package-lock.json
 זה קובץ מיוחד שבדרך כלל טק ליד או מפתח מוביל מעדכן בשרת
 לפני שהוא מעדכן את הקובץ הוא בודק שהאפליקציה עובדת אחרי השינוי הרצוי בסיפריה מיוחדת
 אחרי שזה עובד ועבר את הטסטים המפתח עושה קומיט של הקובץ הזה לשרת
 ***
 שאלות הבנה
 ? if serious package change bug what version will be change
 ? can i have full trust on the middle version number
 ? what is the package.lock for
 ***
*/


        
//npm audit (ביקורת) - Eliminating Security Vulnerabilities;
//------------------------------------------------------------
/*
    פקודה שבודקת את החבילות בפרוייקט ומתריאה אם יש חורים באבטחה של החבילות, מוצאת פגיעויות 
    הפקודה עוזרת למצוא פרצות ידועות שחבילות
    ועוזרת להגן על המשתמשים
    אם אין כאלה הפקודה תחזיר 
    found 0 vulnerabilities
    *npm6 פקודה שקיימת מגרסה 
    *package.json and package-lock.json כדי שהפקודה תעבוד צריך את הקבצים 

    flow:
    01 add "less": "~2.0.0" to package.json;
    02 breaking changes;
    03 npm audit fix; -> npm audit fix --force
    04 npm install less@^3.0.0

    npm audit fix - תעדכן את החבילות שיש לם בעיה באבטחה, אך יש לשים לב כי יכולה לשבור את האפליקציה שלנו בגלל עדכון גרסאות של חבילות
    npm audit fix --dry-run --json - יש להריץ את הפקודה שלא תבצע עדכון אבל תיתן תמונה לגבי המצב  
    
    {
        "actions": [],
        "advisories": {},
        "muted": [],
        "metadata": {
            "vulnerabilities": {
            "info": 0,
            "low": 0,
            "moderate": 0,
            "high": 0,
            "critical": 0
            },
            "dependencies": 262,
            "devDependencies": 2,
            "optionalDependencies": 3,
            "totalDependencies": 267
        },
        "runId": "0afb2224-eb46-493a-add1-be37d84916b2"
    }
*/


/*
    ***
    שאלות הבנה
    ?npm מזה 
    ?dev vs depהבדל בין 
    ?npm audit
    ***

    לסיכום
    מנהל של חבילות בסביבת גאווה סקריפט
    במסגרת הדפדפן או בסביבת נואד במחשב
    התקנה שימוש עדכון והרבה קוד מוכן
 */