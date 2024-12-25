export interface EmergencyInfo {
  id: number;
  header: string;
  steps: string[];
}

export const emergencyData: { [key: number]: EmergencyInfo } = {
  1: {
    id: 1,
    header: 'Fire Safety Steps',
    steps: [
      'Ensure the area is safe.',
      'Alert others and evacuate if necessary.',
      'Call the fire department (101).',
      'Use a fire extinguisher if trained.',
    ],
  },
  2: {
    id: 2,
    header: 'Medical Emergency Steps',
    steps: [
      'Assess the situation for safety.',
      'Check the victim’s responsiveness and breathing.',
      'Provide necessary first aid within your training.',
      'Monitor the victim until professional help arrives.',
    ],
  },
  3: {
    id: 3,
    header: 'Police Assistance Steps',
    steps: [
      'Ensure your safety and the safety of others.',
      'Report the incident to the police (101).',
      'Provide accurate information about the situation.',
      'Cooperate with law enforcement officials.',
    ],
  },
  4: {
    id: 4,
    header: 'Natural Disaster Response Steps',
    steps: [
      'Stay informed about the disaster.',
      'Follow evacuation orders if issued.',
      'Secure necessary supplies and emergency kits.',
      'Help others in need while ensuring your safety.',
    ],
  },
  5: {
    id: 5,
    header: 'Roadside Assistance Steps',
    steps: [
      'Ensure your vehicle is in a safe location.',
      'Call roadside assistance (101) for help.',
      'Use warning signals to alert other drivers.',
      'Follow the instructions provided by the assistance team.',
    ],
  },
  6: {
    id: 6,
    header: 'Search & Rescue Operations Steps',
    steps: [
      'Report missing persons to authorities (101).',
      'Provide detailed information about the missing individuals.',
      'Assist in search efforts if trained and safe to do so.',
      'Stay updated with rescue operation communications.',
    ],
  },
  7: {
    id: 7,
    header: 'Hazardous Materials (HazMat) Response Steps',
    steps: [
      'Identify the hazardous material involved.',
      'Evacuate the area to prevent exposure.',
      'Call HazMat teams (101) for specialized assistance.',
      'Do not attempt to handle or contain the materials yourself.',
    ],
  },
  8: {
    id: 8,
    header: 'Evacuation Procedures Steps',
    steps: [
      'Follow official evacuation orders promptly.',
      'Know the nearest evacuation routes and shelters.',
      'Secure your home and necessary belongings.',
      'Assist others who may need help during evacuation.',
    ],
  },
  9: {
    id: 9,
    header: 'General Emergency Steps',
    steps: [
      'Stay calm and assess the situation.',
      'Ensure your safety and the safety of others.',
      'Call the appropriate emergency service (101).',
      'Provide clear and concise information to responders.',
    ],
  },
  10: {
    id: 10,
    header: 'First Aid Steps',
    steps: [
      'Assess the situation for safety.',
      'Check the victim’s responsiveness and breathing.',
      'Provide necessary first aid within your training.',
      'Monitor the victim until professional help arrives.',
    ],
  },
  11: {
    id: 11,
    header: 'החייאה ופעולות חירום',
    steps: [
      'וודא שהמקום בטוח.',
      'בדוק תגובה ונשימה.',
      'התחל בהחייאה עם לחיצות חזה ונשימות מצילות.',
      'קרא לשירותי חירום (101) אם אין תגובה.',
    ],
  },
  12: {
    id: 12,
    header: 'Report Incident Steps',
    steps: [
      'דווח על האירוע לשירותי חירום (101).',
      'ספק מידע מדויק על המיקום והטבע של האירוע.',
      'עקוב אחר הוראות הנציג בשירות החירום.',
      'הישאר בטוח והמתן לעזרה נוספת במידת הצורך.',
    ],
  },
  13: {
    id: 13,
    header: 'Safety Tips Steps',
    steps: [
      'שמור על ערנות והיה מודע לסביבתך.',
      'הכן ערכת חירום עם אביזרים חיוניים.',
      'למד דרכי בריחה ובטיחות למקרי חירום.',
      'השתתף בהדרכות והכשרות לבטיחות.',
    ],
  },
  14: {
    id: 14,
    header: 'Contact Support Steps',
    steps: [
      'התקשר לתמיכה (101) לצורך עזרה מיידית.',
      'ספק את פרטי הבעיה והנזק שנגרם.',
      'עקוב אחר ההוראות שניתנות על ידי נציג התמיכה.',
      'השאר במקום הבטוח והמתן לעזרה.',
    ],
  },
};
