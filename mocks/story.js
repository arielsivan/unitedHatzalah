export const mockDialogSteps = [
  {
    text: 'שלום! איך אתה מרגיש?',
    position: 'left',
    characterUrl: { uri: 'https://robohash.org/1' },
  },
  {
    text: 'אני מרגיש קצת כאבים בחזה.',
    position: 'right',
    characterUrl: { uri: 'https://robohash.org/2' },
  },
  {
    text: 'מה הצעד הבא שעליך לעשות כפרמדיק?',
    position: 'right',
    type: 'question',
    choices: ['לשאול על קוצר נשימה', 'להתעלם ולהמשיך', 'לתת תרופה באופן מיידי'],
    correctAnswer: 'לשאול על קוצר נשימה',
  },
  {
    text: 'האם אתה סובל מקוצר נשימה?',
    position: 'left',
    characterUrl: { uri: 'https://robohash.org/1' },
  },
  {
    text: 'כן, יש לי קוצר נשימה.',
    position: 'right',
    characterUrl: { uri: 'https://robohash.org/2' },
  },
  {
    text: 'מה ייתכן שמצביע על התקף לב?',
    position: 'right',
    type: 'question',
    choices: [
      'כאבים בחזה, קוצר נשימה, הזעה מוגברת',
      'כאבים ביד ימין בלבד',
      'דופק גבוה בלבד',
    ],
    correctAnswer: 'כאבים בחזה, קוצר נשימה, הזעה מוגברת',
  },
  {
    text: 'אני אבצע בדיקות נוספות כדי להבין את מצבך.',
    position: 'left',
    characterUrl: { uri: 'https://robohash.org/1' },
  },
  {
    text: 'האם יש לך היסטוריה רפואית של בעיות לב?',
    position: 'right',
    correctAnswer: 'כן',
    feedback: 'נכון! היסטוריה רפואית חשובה.',
    choices: ['כן', 'לא'],
    characterUrl: { uri: 'https://robohash.org/2' },
  },
  {
    text: 'אם המטופל מתעלף, מה הפעולה הראשונה שעליך לעשות?',
    position: 'right',
    type: 'question',
    choices: ['להתחיל עיסוי לב מיד', 'להזיז את המטופל במהירות למקום אחר'],
    correctAnswer: 'לבדוק נשימה ודופק',
    feedback: 'נכון! יש לבדוק נשימה ודופק.',
  },
  {
    text: 'תודה על המידע. אני אקח אותך לבית החולים לבדיקה נוספת.',
    position: 'left',
    characterUrl: { uri: 'https://robohash.org/1' },
  },
  {
    text: 'תודה רבה על העזרה המהירה.',
    position: 'right',
    characterUrl: { uri: 'https://robohash.org/2' },
  },
];
