export interface NHLTeam {
  id: string
  name: string
  primary: string
  secondary: string
  tertiary?: string
  darkText: boolean
}

export const NHLTeams: NHLTeam[] = [
  // Anaheim Ducks
  {
    id: 'ana',
    name: 'Anaheim Ducks',
    primary: '#F47A38',
    secondary: '#B9975B',
    tertiary: '#000000',
    darkText: true,
  },

  // Arizona Coyotes
  {
    id: 'ari',
    name: 'Arizona Coyotes',
    primary: '#8C2633',
    secondary: '#E2D6B5',
    tertiary: '#111111',
    darkText: false,
  },

  // Boston Bruins
  {
    id: 'bos',
    name: 'Boston Bruins',
    primary: '#FFB81C',
    secondary: '#000000',
    darkText: true,
  },

  // Buffalo Sabres
  {
    id: 'buf',
    name: 'Buffalo Sabres',
    primary: '#002654',
    secondary: '#FCB514',
    tertiary: '#ADAFAA',
    darkText: false,
  },

  // Calgary Flames
  {
    id: 'cgy',
    name: 'Calgary Flames',
    primary: '#C8102E',
    secondary: '#F1BE48',
    tertiary: '#111111',
    darkText: false,
  },

  // Carolina Hurricanes
  {
    id: 'car',
    name: 'Carolina Hurricanes',
    primary: '#CC0000',
    secondary: '#000000',
    tertiary: '#A4A9AD',
    darkText: false,
  },

  // Chicago Blackhawks
  {
    id: 'chi',
    name: 'Chicago Blackhawks',
    primary: '#CF0A2C',
    secondary: '#000000',
    tertiary: '#FFD100',
    darkText: false,
  },

  // Colorado Avalanche
  {
    id: 'col',
    name: 'Colorado Avalanche',
    primary: '#6F263D',
    secondary: '#236192',
    tertiary: '#A2AAAD',
    darkText: false,
  },

  // Columbus Blue Jackets
  {
    id: 'cbj',
    name: 'Columbus Blue Jackets',
    primary: '#002654',
    secondary: '#CE1126',
    tertiary: '#A4A9AD',
    darkText: false,
  },

  // Dallas Stars
  {
    id: 'dal',
    name: 'Dallas Stars',
    primary: '#006847',
    secondary: '#8F8F8C',
    tertiary: '#111111',
    darkText: false,
  },

  // Detroit Red Wings
  {
    id: 'det',
    name: 'Detroit Red Wings',
    primary: '#CE1126',
    secondary: '#FFFFFF',
    darkText: false,
  },

  // Edmonton Oilers
  {
    id: 'edm',
    name: 'Edmonton Oilers',
    primary: '#041E42',
    secondary: '#FF4C00',
    darkText: false,
  },

  // Florida Panthers
  {
    id: 'fla',
    name: 'Florida Panthers',
    primary: '#041E42',
    secondary: '#C8102E',
    tertiary: '#B9975B',
    darkText: false,
  },

  // Los Angeles Kings
  {
    id: 'lak',
    name: 'Los Angeles Kings',
    primary: '#111111',
    secondary: '#A2AAAD',
    tertiary: '#FFFFFF',
    darkText: false,
  },

  // Minnesota Wild
  {
    id: 'min',
    name: 'Minnesota Wild',
    primary: '#154734',
    secondary: '#A6192E',
    tertiary: '#DDCBA4',
    darkText: false,
  },

  // Montreal Canadiens
  {
    id: 'mtl',
    name: 'Montreal Canadiens',
    primary: '#AF1E2D',
    secondary: '#192168',
    tertiary: '#FFFFFF',
    darkText: false,
  },

  // Nashville Predators
  {
    id: 'nsh',
    name: 'Nashville Predators',
    primary: '#FFB81C',
    secondary: '#041E42',
    tertiary: '#FFFFFF',
    darkText: true,
  },

  // New Jersey Devils
  {
    id: 'njd',
    name: 'New Jersey Devils',
    primary: '#CE1126',
    secondary: '#000000',
    tertiary: '#FFFFFF',
    darkText: false,
  },

  // New York Islanders
  {
    id: 'nyi',
    name: 'New York Islanders',
    primary: '#00539B',
    secondary: '#F47D30',
    tertiary: '#FFFFFF',
    darkText: false,
  },

  // New York Rangers
  {
    id: 'nyr',
    name: 'New York Rangers',
    primary: '#0038A8',
    secondary: '#CE1126',
    tertiary: '#FFFFFF',
    darkText: false,
  },

  // Ottawa Senators
  {
    id: 'ott',
    name: 'Ottawa Senators',
    primary: '#E31837',
    secondary: '#C69214',
    tertiary: '#000000',
    darkText: false,
  },

  // Philadelphia Flyers
  {
    id: 'phi',
    name: 'Philadelphia Flyers',
    primary: '#F74902',
    secondary: '#000000',
    tertiary: '#FFFFFF',
    darkText: false,
  },

  // Pittsburgh Penguins
  {
    id: 'pit',
    name: 'Pittsburgh Penguins',
    primary: '#000000',
    secondary: '#FCB514',
    tertiary: '#CFC493',
    darkText: false,
  },

  // San Jose Sharks
  {
    id: 'sjs',
    name: 'San Jose Sharks',
    primary: '#006D75',
    secondary: '#000000',
    tertiary: '#EA7200',
    darkText: false,
  },

  // Seattle Kraken
  {
    id: 'sea',
    name: 'Seattle Kraken',
    primary: '#99D9D9',
    secondary: '#001F5B',
    tertiary: '#E9072B',
    darkText: true,
  },

  // St. Louis Blues
  {
    id: 'stl',
    name: 'St. Louis Blues',
    primary: '#002F87',
    secondary: '#FCB514',
    tertiary: '#041E42',
    darkText: false,
  },

  // Tampa Bay Lightning
  {
    id: 'tbl',
    name: 'Tampa Bay Lightning',
    primary: '#002868',
    secondary: '#FFFFFF',
    tertiary: '#00205B',
    darkText: false,
  },

  // Toronto Maple Leafs
  {
    id: 'tor',
    name: 'Toronto Maple Leafs',
    primary: '#00205B',
    secondary: '#FFFFFF',
    darkText: false,
  },

  // Vancouver Canucks
  {
    id: 'van',
    name: 'Vancouver Canucks',
    primary: '#00205B',
    secondary: '#00843D',
    tertiary: '#041C2C',
    darkText: false,
  },

  // Vegas Golden Knights
  {
    id: 'vgs',
    name: 'Vegas Golden Knights',
    primary: '#B4975A',
    secondary: '#333F42',
    tertiary: '#C8102E',
    darkText: true,
  },

  // Washington Capitals
  {
    id: 'wsh',
    name: 'Washington Capitals',
    primary: '#C8102E',
    secondary: '#041E42',
    tertiary: '#FFFFFF',
    darkText: false,
  },

  // Winnipeg Jets
  {
    id: 'wpg',
    name: 'Winnipeg Jets',
    primary: '#041E42',
    secondary: '#004C97',
    tertiary: '#AC162C',
    darkText: false,
  },
]
