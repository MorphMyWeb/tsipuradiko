/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuCategory, WorkingHour } from "./types";

export const WORKING_HOURS: WorkingHour[] = [
  { day: "Δευτέρα", open: "11:00", close: "23:30", isClosed: false },
  { day: "Τρίτη", open: "", close: "", isClosed: true },
  { day: "Τετάρτη", open: "11:00", close: "23:30", isClosed: false },
  { day: "Πέμπτη", open: "11:00", close: "23:30", isClosed: false },
  { day: "Παρασκευή", open: "11:00", close: "23:30", isClosed: false },
  { day: "Σάββατο", open: "11:00", close: "23:30", isClosed: false },
  { day: "Κυριακή", open: "11:00", close: "23:30", isClosed: false },
];

export const MENU_DATA: MenuCategory[] = [
  {
    id: "seafood",
    name: "Θαλασσινά & Ψαρικά",
    icon: "Fish",
    description: "Φρέσκα αλιεύματα από τον Θερμαϊκό κόλπο και τον Δέλτα του Αξιού",
    items: [
      {
        id: "mussels",
        greekName: "Μύδια Αχνιστά",
        foreignName: "Vapor Mussels",
        foreignLang: "en",
        description: "Φρέσκα μύδια Κυμίνων μαγειρεμένα σε ζωμό λευκού κρασιού, σκόρδο και φρέσκο μαϊντανό.",
        englishDescription: "Fresh local mussels from Kymina valley steamed in a white wine broth with garlic and fresh parsley.",
        price: 9.50,
        isLocalSpecialty: true,
        tags: ["Τοπικό", "Πρόταση Σεφ", "Φρέσκο"]
      },
      {
        id: "gambari",
        greekName: "Γαρίδες Γάμπαρη",
        foreignName: "Gambari Shrimps",
        foreignLang: "en",
        description: "Η περίφημη ντόπια γαρίδα γάμπαρη Θερμαϊκού, ψητή στα κάρβουνα με λαδολέμονο.",
        englishDescription: "The famous local Thermaikos bay wild gambari shrimps, grilled over charcoal with olive oil and lemon dressing.",
        price: 13.00,
        isLocalSpecialty: true,
        tags: ["Φρέσκο", "Δημοφιλές"]
      },
      {
        id: "kalamaria",
        greekName: "Καλαμαράκια",
        foreignName: "Kalamaria",
        foreignLang: "multilingual",
        description: "Ολόφρεσκα καλαμαράκια τηγανητά, τραγανά εξωτερικά και τρυφερά εσωτερικά.",
        englishDescription: "Crispy golden fried calamari served with a fresh lemon wedge.",
        price: 11.00,
        tags: ["Κλασικό"]
      },
      {
        id: "risotto_seafood",
        greekName: "Ριζότο Θαλασσινών",
        foreignName: "Seafood Risotto",
        foreignLang: "en",
        description: "Xυλωμένο ρύζι με ανάμεικτα θαλασσινά, σαφράν και αρώματα ελληνικού ελαιολάδου.",
        englishDescription: "Creamy risotto cooked with selected seafood, saffron, and premium Greek olive oil.",
        price: 14.50,
        tags: ["Πλούσιο"]
      },
      {
        id: "psarika_mix",
        greekName: "Ψαρικά Ημέρας (Κιλό ή Μερίδα)",
        foreignName: "Fresh Fish of the Day",
        foreignLang: "en",
        description: "Επιλογή από ψάρια ημέρας (τσιπούρες, λαβράκια, μπαρμπούνια) ψημένα με μαεστρία στα κάρβουνα.",
        englishDescription: "Daily catches of premium fresh fish grilled to perfection over real charcoal.",
        price: 12.00,
        tags: ["Φρέσκο", "Κάρβουνα"]
      },
      {
        id: "ostraka",
        greekName: "Όστρακα Φρέσκα",
        foreignName: "Fresh Shellfish Selection",
        foreignLang: "en",
        description: "Ζουμερά όστρακα και κυδώνια, σερβιρισμένα ωμά με λεμόνι ή αχνιστά.",
        englishDescription: "Selection of super fresh local clams and shellfish, served raw with fresh lemon juice.",
        price: 12.50,
        tags: ["Θαλασσινή Αύρα"]
      },
      {
        id: "sardines",
        greekName: "Ψητές Σαρδέλες",
        foreignName: "Grilled Sardines",
        foreignLang: "en",
        description: "Σαρδέλες ψημένες στα κάρβουνα, ανοιγμένες (παντρεμένες) με ρίγανη, σκόρδο και ελαιόλαδο.",
        englishDescription: "Butterflied local sardines grilled with fresh oregano, garlic, and cold-pressed olive oil.",
        price: 8.50,
        tags: ["Παραδοσιακό", "Value"]
      }
    ]
  },
  {
    id: "appetizers",
    name: "Ορεκτικά & Μεζέδες",
    icon: "GlassWater",
    description: "Ιδανικοί μεζέδες για να συνοδεύσετε το τσίπουρο, το ούζο ή το κρασί σας",
    items: [
      {
        id: "taramas",
        greekName: "Λευκός Ταραμάς",
        foreignName: "White Taramas",
        foreignLang: "en",
        description: "Χειροποίητη, μεταξένια μους από λευκό ταραμά υψηλής ποιότητας, εξαιρετικό παρθένο ελαιόλαδο και λεμόνι.",
        englishDescription: "Silky, homemade white fish roe mousse dip made with extra virgin olive oil and lemon juice.",
        price: 5.50,
        tags: ["Χειροποίητο"]
      },
      {
        id: "saganaki",
        greekName: "Σαγανάκι Τυρί",
        foreignName: "Saganaki Cheese",
        foreignLang: "en",
        description: "Κεφαλοτύρι Θεσσαλονίκης τηγανισμένο με τραγανή κρούστα, σβησμένο με φρέσκο λεμόνι.",
        englishDescription: "Traditional regional hard yellow cheese pan-fried to a golden crust, finished with lemon sizzle.",
        price: 6.00,
        tags: ["Ζεστό"]
      },
      {
        id: "zucchini",
        greekName: "Κολοκυθάκια Τηγανητά",
        foreignName: "Fried Zucchini",
        foreignLang: "en",
        description: "Λεπτοκομμένες ροδέλες κολοκυθιού, παναρισμένες και τηγανισμένες, συνοδευόμενες από δροσερό τζατζίκι.",
        englishDescription: "Thin paper-crisp fried slices of locally sourced zucchini, served with a side of refreshing tzatziki.",
        price: 5.50,
        tags: ["Τραγανό"]
      },
      {
        id: "bruschete",
        greekName: "Μπρουσκέτες",
        foreignName: "Bruschete",
        foreignLang: "multilingual",
        description: "Φρυγανισμένο χωριάτικο ψωμί με τριμμένη ντομάτα, φέτα, ελληνική ρίγανη και έξτρα παρθένο ελαιόλαδο.",
        englishDescription: "Toasted farmhouse bread topped with freshly grated tomato, imported feta cheese, oregano and olive oil.",
        price: 4.80,
        tags: ["Ελαφρύ"]
      }
    ]
  },
  {
    id: "salads",
    name: "Σαλάτες",
    icon: "Salad",
    description: "Δροσερές, ολόφρεσκες σαλάτες με τοπικά λαχανικά και εκλεκτά συστατικά",
    items: [
      {
        id: "horiatiki",
        greekName: "Χωριάτικη Σαλάτα",
        foreignName: "Greek Salad",
        foreignLang: "en",
        description: "Ντομάτα, αγγούρι, κρεμμύδι, πιπεριά, ελιές, κάπαρη, αυθεντική φέτα και αγνό παρθένο ελαιόλαδο.",
        englishDescription: "Classic tomato, cucumber, red onion, bell pepper, Greek olives, capers, pure feta cheese and oregano.",
        price: 7.50,
        tags: ["Διάσημο"]
      },
      {
        id: "boiled_greens",
        greekName: "Σαλάτα Βραστών Λαχανικών",
        foreignName: "Boiled Seasonal Vegetables",
        foreignLang: "en",
        description: "Φρέσκα χόρτα εποχής, κολοκυθάκια και πατάτες βραστές, σερβιρισμένα με λαδόλεμονο.",
        englishDescription: "Warm seasonal boiled wild greens, zucchini, and potatoes, drizzled with extra virgin olive oil and lemon juice.",
        price: 6.00,
        tags: ["Υγιεινό"]
      },
      {
        id: "tsiproudotaki",
        greekName: "Σαλάτα 'Tsiproudotaki'",
        foreignName: "Sałatka Tsiproudotaki",
        foreignLang: "bg",
        description: "Μια ιδιαίτερη πικάντικη σαλάτα με ψιλοκομμένο λάχανο, καρότο, τουρσί, μυρωδικά και εκλεκτό dressing.",
        englishDescription: "A curated side salad designed to pair with tsipouro, featuring finely shredded cabbage, carrots, pickled roots, and light dressing.",
        price: 6.50,
        tags: ["Πικάντικο", "Για Τσίπουρο"]
      },
      {
        id: "zohi",
        greekName: "Σαλάτα 'Ζόχι'",
        foreignName: "Салата Зохи",
        foreignLang: "ru",
        description: "Παραδοσιακές άγριες πρασινάδες και χόρτα ('ζόχοι') του κάμπου των Κυμίνων, με σκόρδο και ξίδι.",
        englishDescription: "Traditional field greens collected locally from the delta plains, served dressed with garlic, salt and red wine vinegar.",
        price: 6.50,
        tags: ["Τοπικό"]
      },
      {
        id: "snezhanka",
        greekName: "Καλμαρι 'Snezhanka' & Πατέ Ελιάς",
        foreignName: "Кальмари Снежанка и Маслинов Пастет",
        foreignLang: "bg",
        description: "Δροσερό γιαούρτι με τριμμένο αγγουράκι, σκόρδο (τύπου τζατζίκι/snezhanka), τραγανές μπουκιές καλαμαριού και σπιτικό πατέ ελιάς.",
        englishDescription: "A fresh combination of cucumber-garlic strained yogurt salad, light fried calamari pieces, and handmade Greek black olive tapenade.",
        price: 8.50,
        tags: ["Μοναδικό", "Διεθνές"]
      }
    ]
  },
  {
    id: "desserts",
    name: "Επιδόρπια",
    icon: "IceCream",
    description: "Το γλυκό τελείωμα ενός υπέροχου γεύματος",
    items: [
      {
        id: "glyko_koutaliou",
        greekName: "Γλυκό του Κουταλιού / Κέρασμα",
        foreignName: "Spoon Sweet / House Treat",
        foreignLang: "en",
        description: "Παραδοσιακό χειροποίητο κέρασμα του μαγαζιού: Δροσιστικό γιαούρτι με σπιτικό γλυκό του κουταλιού κυδώνι ή σύκο.",
        englishDescription: "Our complimentary traditional Greek treat: Creamy yogurt served with our homemade slow-cooked seasonal spoon sweet (quince or fig).",
        price: 0.00, // Represented as treat / complimentary!
        tags: ["Κέρασμα", "Σπιτικό"]
      }
    ]
  }
];
