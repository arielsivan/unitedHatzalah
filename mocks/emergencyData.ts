export type EmergencyInfo = {
  header: string;
  steps: string[];
};

export const emergencyData: { [key: string]: EmergencyInfo } = {
  Fire: {
    header: 'Fire Safety Steps',
    steps: [
      'Stay calm and evacuate the area immediately.',
      'Call emergency services (911) once you are in a safe location.',
      "Use a fire extinguisher if trained and it's safe to do so.",
      'Do not re-enter the building until authorities declare it safe.',
    ],
  },
  Medical: {
    header: 'Medical Emergency Steps',
    steps: [
      'Check the victim’s responsiveness and breathing.',
      'Call emergency services (911) for assistance.',
      'Provide first aid within your training level.',
      'Stay with the victim until help arrives.',
    ],
  },
  Police: {
    header: 'Police Emergency Steps',
    steps: [
      'Ensure your safety and the safety of others.',
      'Call emergency services (911) to report the incident.',
      'Provide clear and accurate information about the situation.',
      'Follow the instructions given by the dispatcher.',
    ],
  },
  'Natural Disaster': {
    header: 'Natural Disaster Preparedness Steps',
    steps: [
      'Stay informed about weather updates and warnings.',
      'Have an emergency kit ready with essentials.',
      'Follow evacuation orders if issued.',
      'Help others who may need assistance.',
    ],
  },
  'Roadside Assistance': {
    header: 'Roadside Assistance Steps',
    steps: [
      'Ensure your vehicle is safe and turn on hazard lights.',
      'Call roadside assistance service for help.',
      'Stay inside the vehicle if it is safe to do so.',
      'Wait for professionals to arrive and assist you.',
    ],
  },
  'Search & Rescue': {
    header: 'Search & Rescue Steps',
    steps: [
      'Report the missing person to authorities immediately.',
      'Provide detailed information about the missing person.',
      'Assist rescue teams by providing any helpful information.',
      'Follow safety guidelines provided by rescue teams.',
    ],
  },
  HazMat: {
    header: 'Hazardous Materials Emergency Steps',
    steps: [
      'Evacuate the area immediately.',
      'Call emergency services and report the HazMat incident.',
      'Avoid contact with any hazardous materials.',
      'Follow instructions from emergency responders.',
    ],
  },
  Evacuation: {
    header: 'Evacuation Steps',
    steps: [
      'Stay calm and follow evacuation routes.',
      'Do not use elevators; use stairs instead.',
      'Assist others who may need help evacuating.',
      'Proceed to the designated safe area.',
    ],
  },
  Other: {
    header: 'Emergency Steps',
    steps: [
      'Assess the situation and ensure your safety.',
      'Call the appropriate emergency services.',
      'Provide clear information about the emergency.',
      'Follow the instructions given by emergency responders.',
    ],
  },
  'First Aid': {
    header: 'First Aid Steps',
    steps: [
      'Assess the situation for safety.',
      'Check the victim’s responsiveness and breathing.',
      'Provide necessary first aid within your training.',
      'Monitor the victim until professional help arrives.',
    ],
  },
  CPR: {
    header: 'CPR Steps',
    steps: [
      'Ensure the scene is safe.',
      'Check responsiveness and breathing.',
      'Call emergency services (911) if unresponsive.',
      'Begin CPR with chest compressions and rescue breaths.',
    ],
  },
  'Report Incident': {
    header: 'Report Incident Steps',
    steps: [
      'Ensure your safety before acting.',
      'Record essential details of the incident.',
      'Contact the appropriate authorities to report.',
      'Provide accurate and concise information.',
    ],
  },
  'Safety Tips': {
    header: 'General Safety Tips',
    steps: [
      'Stay aware of your surroundings.',
      'Maintain a safe distance from potential hazards.',
      'Keep emergency contacts accessible.',
      'Participate in regular safety training.',
    ],
  },
  'Contact Support': {
    header: 'Contact Support Steps',
    steps: [
      'Identify the appropriate support service needed.',
      'Gather necessary information before making the call.',
      'Communicate your needs clearly and calmly.',
      'Follow any instructions provided by the support representative.',
    ],
  },
  // Add more mappings for other emergency types as needed...
};
