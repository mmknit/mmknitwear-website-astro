export interface DivisionFact {
  label: string;
  value: string;
}

export interface Division {
  slug: string;
  title: string;
  img: string;
  text: string;
  stat: string;
  short: string;
  overview: string;
  highlights: string[];
  facts: DivisionFact[];
}

export const divisions: Division[] = [
  {
    slug: 'garments',
    title: 'Garments Division',
    img: 'upload/projects-garments.jpg',
    text: 'A large garments unit with 116 production lines and 3,850 sets of sewing machinery. Our independent quality team of 454 people ensures the customer\u2019s required quality standard, with a factory regular AQL system of 2.5.',
    stat: '200,000 pieces per day',
    short: 'A large garments unit with 116 production lines and 3,850 sets of sewing machinery.',
    overview:
      'The garments division is the engine room of our Gazipur complex, converting finished fabric and cut panels into sewn, quality-checked knitwear at industrial scale. Its 116 production lines and 3,850 sets of sewing machinery cover the full knitwear range, from t-shirts, polo shirts and sweats to joggers and dresses. An independent quality team of 454 people inspects every stage to the customer\u2019s required standard under a factory-wide AQL system of 2.5.',
    highlights: [
      '116 production lines covering the full knitwear range',
      '3,850 sets of modern sewing machinery',
      'Independent 454-member quality team enforcing AQL 2.5',
      '200,000 pieces produced and inspected every day',
    ],
    facts: [
      { label: 'Production lines', value: '116' },
      { label: 'Sewing machines', value: '3,850' },
      { label: 'Quality team', value: '454' },
      { label: 'Daily output', value: '200,000 pcs' },
    ],
  },
  {
    slug: 'knitting',
    title: 'Knitting Division',
    img: 'upload/projects-knitting.jpg',
    text: 'A large circular knitting unit with 225 sets of machines with 20GG, 24GG, 28GG cylinders and optimum attachments to produce all types of weft knitted fabric. Machines are Fukuhara, Fukuhama and Jiunn Long branded.',
    stat: '45 tons/day \u00B7 25,000 collars/day',
    short: '225 circular knitting machines producing all types of weft-knitted fabric.',
    overview:
      'Our knitting division produces all types of weft-knitted fabric in-house, guaranteeing a steady, quality-controlled supply of fabric for every order. A fleet of 225 circular knitting machines from Fukuhara, Fukuhama and Jiunn Long run in 20GG, 24GG and 28GG gauges with optimum attachments. The unit also produces collars and cuffs, delivering around 45 tons of fabric and 25,000 collars every day.',
    highlights: [
      '225 circular knitting machines',
      '20GG, 24GG and 28GG cylinder gauges',
      'Fukuhara, Fukuhama and Jiunn Long machinery',
      '45 tons of fabric and 25,000 collars/cuffs per day',
    ],
    facts: [
      { label: 'Machines', value: '225 sets' },
      { label: 'Gauges', value: '20\u201328 GG' },
      { label: 'Fabric output', value: '45 tons/day' },
      { label: 'Collars & cuffs', value: '25,000/day' },
    ],
  },
  {
    slug: 'dyeing',
    title: 'Dyeing Division',
    img: 'upload/projects-dyeing.jpg',
    text: 'State-of-the-art dyeing machinery with an in-house lab and all physical testing facilities. We can dye cotton, viscose, modal, cotton/poly, poly/cotton and cotton/viscose, with a Biological ETP capacity of 280 m\u00B3 per hour.',
    stat: '45 tons/day \u00B7 75 dyeing + 20 sample machines',
    short: 'State-of-the-art dyeing with an in-house lab and all physical testing facilities.',
    overview:
      'Dyeing is performed on state-of-the-art machinery backed by an in-house laboratory and complete physical testing facilities. We dye cotton, viscose, modal, cotton/poly, poly/cotton and cotton/viscose in both solid and blend shades across 75 production dyeing machines and 20 sample machines. A biological ETP with a capacity of 280 m\u00B3 per hour keeps our water treatment fully compliant.',
    highlights: [
      'In-house lab with all physical testing facilities',
      'Cotton, viscose, modal and poly blend dyeing',
      '75 production + 20 sample dyeing machines',
      'Biological ETP with 280 m\u00B3 per hour capacity',
    ],
    facts: [
      { label: 'Dyeing machines', value: '75' },
      { label: 'Sample machines', value: '20' },
      { label: 'Capacity', value: '45 tons/day' },
      { label: 'ETP capacity', value: '280 m\u00B3/h' },
    ],
  },
  {
    slug: 'sampling',
    title: 'Sample & CAD Facility',
    img: 'upload/projects-sampling.jpg',
    text: 'Our sample section is enriched with the latest machinery, expert operators and a CAD system to achieve precise markers, offering the finest prototyping solution.',
    stat: '147 sample machines \u00B7 8 CAD \u00B7 14,000 pcs/month',
    short: 'Latest machinery, expert operators and a CAD system for precise markers.',
    overview:
      'Before a single production line starts, our sample and CAD facility brings every design to life with precision and speed. The section is enriched with the latest machinery and expert operators, while a CAD system creates precise markers that save fabric and improve accuracy. The facility produces around 14,000 samples per month, giving customers reliable proto, fit and salesman samples.',
    highlights: [
      '147 sample machines covering all production processes',
      '8 CAD systems for precise, fabric-saving markers',
      'Expert operators and the latest prototyping machinery',
      'Around 14,000 samples produced every month',
    ],
    facts: [
      { label: 'Sample machines', value: '147' },
      { label: 'CAD systems', value: '8' },
      { label: 'Monthly output', value: '14,000 pcs' },
      { label: 'Services', value: 'Proto \u00B7 Fit \u00B7 Salesman' },
    ],
  },
  {
    slug: 'cutting',
    title: 'Cutting Facility',
    img: 'upload/projects-cutting.jpg',
    text: 'Equipped with auto relaxation, auto spreading and auto cutting. We have 20 manual cutting tables and 8 auto cutters, and we check 100% of cut panels before sewing input to ensure accuracy.',
    stat: '240,000 pieces per day',
    short: 'Auto relaxation, auto spreading and auto cutting with 100% panel checking.',
    overview:
      'Our cutting facility combines automation with rigorous checking to deliver accurate, production-ready panels. Auto relaxation, auto spreading and auto cutting machinery prepares the fabric while 20 manual cutting tables and 8 auto cutters handle every order size. Every cut panel is checked 100% before it moves into sewing input, eliminating defects at the source and keeping output at 240,000 pieces per day.',
    highlights: [
      'Auto relaxation, auto spreading and auto cutting',
      '20 manual cutting tables and 8 auto cutters',
      '100% checking of cut panels before sewing input',
      '240,000 pieces prepared each day',
    ],
    facts: [
      { label: 'Manual tables', value: '20' },
      { label: 'Auto cutters', value: '8' },
      { label: 'Panel checking', value: '100%' },
      { label: 'Daily output', value: '240,000 pcs' },
    ],
  },
  {
    slug: 'printing',
    title: 'Placement Printing Facility',
    img: 'upload/projects-printing.jpg',
    text: 'Equipped with both manual and machine facilities. We can handle all kinds of water base and plastisol print at pigment, supported by a graphic design and colour team.',
    stat: '180,000 pcs/day \u00B7 5 auto + 20 manual sets',
    short: 'Manual and machine placement printing for water base and plastisol.',
    overview:
      'The placement printing facility handles all kinds of water-base and plastisol print at pigment, from simple one-colour placements to complex layered designs. A dedicated graphic design and colour team develops each print to match the buyer\u2019s artwork exactly. With 5 automatic and 20 manual print sets, the facility prints 180,000 pieces per day.',
    highlights: [
      'Water base and plastisol printing at pigment',
      '5 automatic and 20 manual print sets',
      'In-house graphic design and colour team',
      '180,000 pieces printed every day',
    ],
    facts: [
      { label: 'Auto sets', value: '5' },
      { label: 'Manual sets', value: '20' },
      { label: 'Daily output', value: '180,000 pcs' },
      { label: 'Inks', value: 'Water base \u00B7 Plastisol' },
    ],
  },
  {
    slug: 'embroidery',
    title: 'Embroidery Section',
    img: 'upload/projects-embroidery.jpg',
    text: 'Five sets of embroidery machines with 20 heads each supporting up to 9 colours per design, plus applique laser cutting and fusing machines. We handle run stitch, tatami, sequin, chenille, taping and more.',
    stat: '50,000 pieces per day',
    short: 'Five 20-head embroidery machines plus applique laser cutting and fusing.',
    overview:
      'Five embroidery machines with 20 heads each bring detailed, multi-colour embroidery to our garments, supporting up to 9 colours per design. We handle run stitch, tatami, sequin, chenille, taping and more, supported by applique laser cutting and fusing machines for premium trims. The section embroiders 50,000 pieces per day to specification.',
    highlights: [
      'Five 20-head machines supporting up to 9 colours',
      'Run stitch, tatami, sequin, chenille and taping',
      'Applique laser cutting and fusing machines',
      '50,000 pieces embroidered per day',
    ],
    facts: [
      { label: 'Machines', value: '5 \u00D7 20 heads' },
      { label: 'Colours per design', value: 'Up to 9' },
      { label: 'Techniques', value: 'Stitch \u00B7 Sequin \u00B7 Chenille' },
      { label: 'Daily output', value: '50,000 pcs' },
    ],
  },
  {
    slug: 'aop',
    title: 'All Over Printing Facility',
    img: 'upload/projects-aop.jpg',
    text: 'A brand new AOP factory equipped with 15 sets of machines (1 rotary and 1 flat bed). We do pigment, rubber, discharge, glitter, glow in the dark, burnout, metallic and CMYK (photo) printing.',
    stat: '15,000 kg per day',
    short: 'A brand new AOP factory equipped with 15 sets of machines.',
    overview:
      'Our brand new AOP factory delivers full-piece, all-over printing with 15 sets of machines, including one rotary and one flat-bed unit. The facility performs pigment, rubber, discharge, glitter, glow-in-the-dark, burnout, metallic and CMYK photo printing, giving designers a complete canvas for seasonal statements. Output reaches 15,000 kg of printed fabric per day.',
    highlights: [
      '15 machine sets with rotary and flat-bed printing',
      'Pigment, rubber, discharge, glitter and burnout',
      'Glow-in-the-dark, metallic and CMYK photo prints',
      '15,000 kg of fabric printed per day',
    ],
    facts: [
      { label: 'Machine sets', value: '15' },
      { label: 'Rotary units', value: '1' },
      { label: 'Flat-bed units', value: '1' },
      { label: 'Daily output', value: '15,000 kg' },
    ],
  },
  {
    slug: 'laundry',
    title: 'Laundry Facility',
    img: 'upload/projects-laundry.jpg',
    text: 'A total washing solution: common washing, garment dyeing, rinse wash, enzyme wash, softener wash, pigment wash, reactive dyeing, acid wash, stone wash, tie dye, burn out wash and towel bleach wash.',
    stat: '50,000 pcs/day \u00B7 19 machines \u00B7 15 sample types/day',
    short: 'A total washing solution from common wash to garment dyeing.',
    overview:
      'The laundry facility provides a total washing solution, from everyday common washing to specialised garment dyeing and effect finishes. We run rinse, enzyme, softener, pigment and reactive washes alongside acid, stone, tie dye, burn out and towel bleach treatments. With 19 machines and 15 sample developments per day, the division finishes 50,000 pieces daily.',
    highlights: [
      'Common wash through to garment dyeing',
      'Acid, stone, tie dye, burn out and towel bleach',
      '15 sample developments per day',
      '50,000 pieces finished daily',
    ],
    facts: [
      { label: 'Machines', value: '19' },
      { label: 'Sample types/day', value: '15' },
      { label: 'Daily output', value: '50,000 pcs' },
      { label: 'Processes', value: 'Wash \u00B7 Dye \u00B7 Finish' },
    ],
  },
];
