import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
const resources = {
  en: {
    translation: {
      nav: {
        products: "Products",
        tinyLiving: "Tiny Living",
        recipes: "Recipes",
        compare: "Compare",
        contact: "Contact"
      },
      footer: {
        rights: "ZenCook Advanced Systems. All rights reserved.",
        cities: ["London", "Istanbul", "Milan"]
      },
      home: {
        titlePart1: "Invisible",
        titleTech: "Technology",
        titlePart2: "Visible Luxury",
        subtitle: "ZenCook redefines the kitchen landscape. Experience the world's most advanced under-counter induction hobs. No clutter, only pure heat.",
        explore: "Explore Collection",
        tinyLink: "Tiny House Module",
        sensorInfo: "Surface Intelligence Sensor / Active Mode",
        card1Tag: "Special Edition",
        card1Title: "Tiny House Module",
        card1Desc: "Ready-to-use sink & hob integration for nomadic living and micro-homes.",
        card1Link: "View Integrated Modules",
        card2Tag: "The Journal",
        card2Title: "Culinary Arts",
        card2Desc: "Molecular gastronomy and curated induction recipes for the modern chef.",
        card2Link: "Explore Blog",
        card3Tag: "Analysis",
        card3Title: "Compare Series",
        card3Desc: "Compare the Zen 2-Burner and Zen 4-Burner configurations for your space.",
        card3Link: "Specs Comparison"
      },
      tinyLiving: {
        tag: "Special Edition",
        title1: "Zen",
        title2: "Nomad",
        title3: "Module",
        diagramTag1: "Induction Zone",
        diagramTag2: "Sink Basin",
        feature1: "Plug & Play Design",
        feature2: "Nomadic Kitchen",
        heading: "Complete Kitchen, Zero Footprint",
        desc: "Designed explicitly for Tiny Houses and modern Caravans. The ZenNomad module combines our invisible induction technology with a high-grade concealed sink in a single, plug-and-play surface. Pre-wired, pre-plumbed, and ready to drop into any compact counter space.",
        btn: "Pre-Order Module",
        specs: [
          { label: "Integration", value: "Seamless Edge-to-Edge" },
          { label: "Sink Module", value: "High-Grade Titanium Finish" },
          { label: "Power Draw", value: "Optimized for Off-Grid (12V/220V)" },
          { label: "Dimensions", value: "Compact: 80cm x 40cm" }
        ]
      },
      products: {
        titlePart1: "The",
        titleHighlight: "Invisible",
        titlePart2: "Collection",
        subtitle: "A seamless integration of power and design. Our hobs hide entirely beneath your porcelain or ceramic surfaces, revealing themselves only through minimalist light projections.",
        mapVis: "Surface Map Visualization",
        maxPower: "Max Power",
        zones: "Zones",
        surfaceConfig: "Surface Config",
        compareLink: "Compare Specs",
        list: [
          {
            name: 'Zen 2-Burner',
            subtitle: 'Compact Brilliance',
            desc: 'Ideal for urban apartments and secondary kitchens. Two high-power invisible zones.'
          },
          {
            name: 'Zen 4-Burner',
            subtitle: 'The Culinary Standard',
            desc: 'The standard configuration for modern homes. Four flexible cooking zones with bridge technology.'
          },
          {
            name: 'Zen 6-Burner Pro',
            subtitle: 'Maximum Freedom',
            desc: 'For the professional home chef. Six zones with automated pan recognition and sliding power control.'
          }
        ]
      },
      compare: {
        titlePart1: "Compare",
        titlePart2: "Specifications",
        subtitle: "Analyze the technical aspects of the ZenCook series to find the perfect configuration for your architectural project.",
        featureTh: "Feature",
        models: ['Zen 2-Burner', 'Zen 4-Burner', 'Zen 6-Burner Pro', 'ZenNomad Module'],
        featureNames: [
          'Cooking Zones',
          'Max Power Output',
          'Surface Material Compatibility',
          'Light Beam Interface',
          'Smartphone Connect',
          'Automated Pan Sensing',
          'Booster Function',
          'Installation'
        ],
        valuesMatrix: [
          ['2', '4', '6 (Bridge)', '2 + Sink'],
          ['3.6 kW', '7.2 kW', '10.8 kW', '3.6 kW'],
          ['12-20mm Porcelain', '12-20mm Porcelain', '12-20mm Porcelain (All)', 'Included Surface'],
          ['Yes', 'Yes', 'Yes', 'Yes'],
          ['No', 'Yes', 'Yes', 'Yes'],
          ['No', 'No', 'Yes', 'No'],
          ['Yes', 'Yes', 'Yes', 'Yes'],
          ['Professional', 'Professional', 'Professional', 'Plug & Play']
        ]
      },
      journal: {
        titlePart1: "The",
        titlePart2: "Journal",
        subtitle: "Culinary techniques, architectural integration, and recipes.",
        masterclassTag: "Masterclass",
        masterclassTitle: "Cooking Without Boundaries",
        masterclassDesc: "A visual journey through preparing a 5-course meal on an entirely blank counter surface.",
        posts: [
          {
            category: 'Recipe',
            title: 'Sous Vide Filet with Invisible Induction',
            excerpt: 'Precision temperature control allows for perfect searing directly on the porcelain surface.',
            date: 'Oct 12'
          },
          {
            category: 'Architecture',
            title: 'The Minimalist Kitchen Philosophy',
            excerpt: 'Why hiding appliances creates a more tranquil environment for culinary creativity.',
            date: 'Oct 08'
          },
          {
            category: 'Innovation',
            title: 'Understanding Surface Intelligence',
            excerpt: 'How ZenCook maps your pan size and material to optimize magnetic waves.',
            date: 'Sep 29'
          },
          {
            category: 'Recipe',
            title: 'Caramelizing Sugar at 180°C',
            excerpt: 'The delicate art of temperature stability using our responsive sensors.',
            date: 'Sep 15'
          }
        ]
      }
    }
  },
  tr: {
    translation: {
      nav: {
        products: "Ürünler",
        tinyLiving: "Tiny House",
        recipes: "Tarifler",
        compare: "Karşılaştır",
        contact: "İletişim"
      },
      footer: {
        rights: "ZenCook İleri Sistemler. Tüm hakları saklıdır.",
        cities: ["Londra", "İstanbul", "Milano"]
      },
      home: {
        titlePart1: "Görünmez",
        titleTech: "Teknoloji",
        titlePart2: "Görünür Lüks.",
        subtitle: "ZenCook mutfak manzarasını yeniden tanımlıyor. Dünyanın en gelişmiş tezgah altı indüksiyon ocaklarını deneyimleyin. Dağınıklık yok, sadece saf ısı.",
        explore: "Koleksiyonu Keşfet",
        tinyLink: "Tiny House Modülü",
        sensorInfo: "Yüzey Zeka Sensörü / Aktif Mod",
        card1Tag: "Özel Üretim",
        card1Title: "Tiny House Modülü",
        card1Desc: "Göçebe yaşam ve mikro evler için kullanıma hazır lavabo ve ocak entegrasyonu.",
        card1Link: "Entegre Modülleri İncele",
        card2Tag: "Dergi",
        card2Title: "Mutfak Sanatları",
        card2Desc: "Modern şefler için moleküler gastronomi ve özel indüksiyon tarifleri.",
        card2Link: "Blog'u Keşfet",
        card3Tag: "Analiz",
        card3Title: "Serileri Karşılaştır",
        card3Desc: "Alanınız için Zen 2 Ocaklı ve Zen 4 Ocaklı konfigürasyonlarını karşılaştırın.",
        card3Link: "Özellik Karşılaştırması"
      },
      tinyLiving: {
        tag: "Özel Üretim",
        title1: "Zen",
        title2: "Göçebe",
        title3: "Modülü",
        diagramTag1: "İndüksiyon Alanı",
        diagramTag2: "Lavabo Havzası",
        feature1: "Tak & Çalıştır Tasarım",
        feature2: "Göçebe Mutfak",
        heading: "Eksiksiz Mutfak, Sıfır Ayak İzi",
        desc: "Tiny House'lar ve modern Karavanlar için özel olarak tasarlandı. ZenNomad modülü, görünmez indüksiyon teknolojimizi yüksek kalite gizli bir lavabo ile tek bir tak-çalıştır yüzeyde birleştirir. Önceden kablolanmış, tesisatı çekilmiş ve herhangi bir kompakt tezgah alanına yerleştirilmeye hazır.",
        btn: "Modülü Ön Sipariş Ver",
        specs: [
          { label: "Entegrasyon", value: "Kusursuz Uçtan Uca" },
          { label: "Lavabo Modülü", value: "Yüksek Kalite Titanyum Kaplama" },
          { label: "Güç Çekimi", value: "Şebeke Dışı İçin Optimize Edilmiş (12V/220V)" },
          { label: "Boyutlar", value: "Kompakt: 80cm x 40cm" }
        ]
      },
      products: {
        titlePart1: "The",
        titleHighlight: "Görünmez",
        titlePart2: "Koleksiyon",
        subtitle: "Güç ve tasarımın kusursuz bir entegrasyonu. Ocaklarımız porselen veya seramik yüzeylerinizin altına tamamen gizlenir, kendilerini yalnızca minimalist ışık yansımalarıyla gösterir.",
        mapVis: "Yüzey Haritası Görselleştirmesi",
        maxPower: "Maks. Güç",
        zones: "Bölgeler",
        surfaceConfig: "Yüzey Yapılandırması",
        compareLink: "Özellikleri Karşılaştır",
        list: [
          {
            name: 'Zen 2 Ocaklı',
            subtitle: 'Kompakt Mükemmellik',
            desc: 'Şehir apartmanları ve ikincil mutfaklar için ideal. İki yüksek güçlü görünmez bölge.'
          },
          {
            name: 'Zen 4 Ocaklı',
            subtitle: 'Mutfak Standardı',
            desc: 'Modern evler için standart konfigürasyon. Köprü teknolojisine sahip dört esnek pişirme bölgesi.'
          },
          {
            name: 'Zen 6 Ocaklı Pro',
            subtitle: 'Maksimum Özgürlük',
            desc: 'Profesyonel ev şefi için. Otomatik tava tanıma ve kaydırmalı güç kontrollü altı bölge.'
          }
        ]
      },
      compare: {
        titlePart1: "Özellikleri",
        titlePart2: "Karşılaştır",
        subtitle: "Mimari projeniz için mükemmel yapılandırmayı bulmak amacıyla ZenCook serisinin teknik yönlerini analiz edin.",
        featureTh: "Özellik",
        models: ['Zen 2 Ocaklı', 'Zen 4 Ocaklı', 'Zen 6 Ocaklı Pro', 'ZenNomad Modülü'],
        featureNames: [
          'Pişirme Bölgeleri',
          'Maksimum Güç Çıkışı',
          'Yüzey Malzemesi Uyumluluğu',
          'Işık Hüzmesi Arayüzü',
          'Akıllı Telefon Bağlantısı',
          'Otomatik Tava Algılama',
          'Hızlandırıcı (Booster) İşlevi',
          'Kurulum'
        ],
        valuesMatrix: [
          ['2', '4', '6 (Köprü)', '2 + Lavabo'],
          ['3.6 kW', '7.2 kW', '10.8 kW', '3.6 kW'],
          ['12-20mm Porselen', '12-20mm Porselen', '12-20mm Porselen (Tümü)', 'Dahil Yüzey'],
          ['Evet', 'Evet', 'Evet', 'Evet'],
          ['Hayır', 'Evet', 'Evet', 'Evet'],
          ['Hayır', 'Hayır', 'Evet', 'Hayır'],
          ['Evet', 'Evet', 'Evet', 'Evet'],
          ['Profesyonel', 'Profesyonel', 'Profesyonel', 'Tak & Çalıştır']
        ]
      },
      journal: {
        titlePart1: "The",
        titlePart2: "Dergi",
        subtitle: "Mutfak teknikleri, mimari entegrasyon ve tarifler.",
        masterclassTag: "Masterclass",
        masterclassTitle: "Sınırlarsız Pişirme",
        masterclassDesc: "Tamamen boş bir tezgah yüzeyinde 5 çeşitten oluşan bir menü hazırlamanın görsel yolculuğu.",
        posts: [
          {
            category: 'Tarif',
            title: 'Görünmez İndüksiyonda Sous Vide Fileto',
            excerpt: 'Hassas sıcaklık kontrolü, doğrudan porselen yüzeyde mükemmel mühürlemeye olanak tanır.',
            date: '12 Eki'
          },
          {
            category: 'Mimari',
            title: 'Minimalist Mutfak Felsefesi',
            excerpt: 'Cihazları gizlemek, mutfak yaratıcılığı için neden daha huzurlu bir ortam yaratır?',
            date: '08 Eki'
          },
          {
            category: 'İnovasyon',
            title: 'Yüzey Zekasını Anlamak',
            excerpt: 'ZenCook, manyetik dalgaları optimize etmek için tava boyutunuzu ve malzemenizi nasıl eşler?',
            date: '29 Eyl'
          },
          {
            category: 'Tarif',
            title: '180°C\'de Şeker Karamelize Etmek',
            excerpt: 'Duyarlı sensörlerimizi kullanarak sıcaklık kararlılığının hassas sanatı.',
            date: '15 Eyl'
          }
        ]
      }
    }
  },
  de: {
    translation: {
      nav: {
        products: "Produkte",
        tinyLiving: "Tiny Living",
        recipes: "Rezepte",
        compare: "Vergleichen",
        contact: "Kontakt"
      },
      footer: {
        rights: "ZenCook Fortschrittliche Systeme. Alle Rechte vorbehalten.",
        cities: ["London", "Istanbul", "Mailand"]
      },
      home: {
        titlePart1: "Unsichtbare",
        titleTech: "Technologie",
        titlePart2: "Sichtbarer Luxus.",
        subtitle: "ZenCook definiert die Küchenlandschaft neu. Erleben Sie die fortschrittlichsten Untertisch-Induktionskochfelder der Welt. Keine Unordnung, nur pure Hitze.",
        explore: "Kollektion Erkunden",
        tinyLink: "Tiny House Modul",
        sensorInfo: "Oberflächenintelligenz-Sensor / Aktiver Modus",
        card1Tag: "Spezialedition",
        card1Title: "Tiny House Modul",
        card1Desc: "Gebrauchsfertige Spülen- und Kochfeldintegration für nomadisches Leben und Mikro-Häuser.",
        card1Link: "Integrierte Module Ansehen",
        card2Tag: "Das Journal",
        card2Title: "Kulinarische Künste",
        card2Desc: "Molekulare Gastronomie und ausgewählte Induktionsrezepte für den modernen Koch.",
        card2Link: "Blog Erkunden",
        card3Tag: "Analyse",
        card3Title: "Serien Vergleichen",
        card3Desc: "Vergleichen Sie die Zen 2-Flammen- und Zen 4-Flammen-Konfigurationen für Ihren Raum.",
        card3Link: "Spezifikationsvergleich"
      },
      tinyLiving: {
        tag: "Spezialedition",
        title1: "Zen",
        title2: "Nomad",
        title3: "Modul",
        diagramTag1: "Induktionszone",
        diagramTag2: "Spülbecken",
        feature1: "Plug & Play Design",
        feature2: "Nomadische Küche",
        heading: "Komplette Küche, Null Fußabdruck",
        desc: "Speziell für Tiny Houses und moderne Wohnwagen entwickelt. Das ZenNomad Modul kombiniert unsere unsichtbare Induktionstechnologie mit einer hochwertigen verdeckten Spüle in einer einzigen Plug-and-Play-Oberfläche. Vorverdrahtet, vorinstalliert und bereit für jeden kompakten Thekenbereich.",
        btn: "Modul Vorbestellen",
        specs: [
          { label: "Integration", value: "Nahtlos Kante-an-Kante" },
          { label: "Spülenmodul", value: "Hochwertiges Titan-Finish" },
          { label: "Stromverbrauch", value: "Optimiert für netzunabhängig (12V/220V)" },
          { label: "Abmessungen", value: "Kompakt: 80cm x 40cm" }
        ]
      },
      products: {
        titlePart1: "Die",
        titleHighlight: "Unsichtbare",
        titlePart2: "Kollektion",
        subtitle: "Eine nahtlose Integration von Leistung und Design. Unsere Kochfelder verstecken sich vollständig unter Ihren Porzellan- oder Keramikoberflächen und zeigen sich nur durch minimalistische Lichtprojektionen.",
        mapVis: "Visualisierung der Oberflächenkarte",
        maxPower: "Max. Leistung",
        zones: "Zonen",
        surfaceConfig: "Oberflächenkonfig.",
        compareLink: "Spezifikationen vergleichen",
        list: [
          {
            name: 'Zen 2-Brenner',
            subtitle: 'Kompakte Brillanz',
            desc: 'Ideal für Stadtwohnungen und Zweitküchen. Zwei leistungsstarke unsichtbare Zonen.'
          },
          {
            name: 'Zen 4-Brenner',
            subtitle: 'Der kulinarische Standard',
            desc: 'Die Standardkonfiguration für moderne Häuser. Vier flexible Kochzonen mit Brückentechnologie.'
          },
          {
            name: 'Zen 6-Brenner Pro',
            subtitle: 'Maximale Freiheit',
            desc: 'Für den professionellen Hobbykoch. Sechs Zonen mit automatischer Topferkennung und gleitender Leistungsregelung.'
          }
        ]
      },
      compare: {
        titlePart1: "Spezifikationen",
        titlePart2: "Vergleichen",
        subtitle: "Analysieren Sie die technischen Aspekte der ZenCook-Serie, um die perfekte Konfiguration für Ihr Architekturprojekt zu finden.",
        featureTh: "Funktion",
        models: ['Zen 2-Brenner', 'Zen 4-Brenner', 'Zen 6-Brenner Pro', 'ZenNomad Modul'],
        featureNames: [
          'Kochzonen',
          'Max. Ausgangsleistung',
          'Oberflächenmaterial',
          'Lichtstrahl-Schnittstelle',
          'Smartphone-Verbindung',
          'Automatische Topferkennung',
          'Booster-Funktion',
          'Installation'
        ],
        valuesMatrix: [
          ['2', '4', '6 (Brücke)', '2 + Spüle'],
          ['3.6 kW', '7.2 kW', '10.8 kW', '3.6 kW'],
          ['12-20mm Porzellan', '12-20mm Porzellan', '12-20mm Porzellan (Alle)', 'Inklusive Oberfläche'],
          ['Ja', 'Ja', 'Ja', 'Ja'],
          ['Nein', 'Ja', 'Ja', 'Ja'],
          ['Nein', 'Nein', 'Ja', 'Nein'],
          ['Ja', 'Ja', 'Ja', 'Ja'],
          ['Professionell', 'Professionell', 'Professionell', 'Plug & Play']
        ]
      },
      journal: {
        titlePart1: "Das",
        titlePart2: "Journal",
        subtitle: "Kulinarische Techniken, architektonische Integration und Rezepte.",
        masterclassTag: "Meisterklasse",
        masterclassTitle: "Grenzenloses Kochen",
        masterclassDesc: "Eine visuelle Reise durch die Zubereitung eines 5-Gänge-Menüs auf einer völlig leeren Thekenoberfläche.",
        posts: [
          {
            category: 'Rezept',
            title: 'Sous-Vide-Filet mit unsichtbarer Induktion',
            excerpt: 'Präzise Temperaturkontrolle ermöglicht perfektes Anbraten direkt auf der Porzellanoberfläche.',
            date: '12. Okt'
          },
          {
            category: 'Architektur',
            title: 'Die Philosophie der minimalistischen Küche',
            excerpt: 'Warum das Verstecken von Geräten eine ruhigere Umgebung für kulinarische Kreativität schafft.',
            date: '08. Okt'
          },
          {
            category: 'Innovation',
            title: 'Oberflächenintelligenz verstehen',
            excerpt: 'Wie ZenCook Ihre Pfannengröße und Ihr Material kartiert, um magnetische Wellen zu optimieren.',
            date: '29. Sep'
          },
          {
            category: 'Rezept',
            title: 'Karamellisierung von Zucker bei 180°C',
            excerpt: 'Die feine Kunst der Temperaturstabilität unter Verwendung unserer reaktionsschnellen Sensoren.',
            date: '15. Sep'
          }
        ]
      }
    }
  },
  it: {
    translation: {
      nav: {
        products: "Prodotti",
        tinyLiving: "Tiny Living",
        recipes: "Ricette",
        compare: "Confronta",
        contact: "Contatti"
      },
      footer: {
        rights: "ZenCook Sistemi Avanzati. Tutti i diritti riservati.",
        cities: ["Londra", "Istanbul", "Milano"]
      },
      home: {
        titlePart1: "Invisibile",
        titleTech: "Tecnologia",
        titlePart2: "Lusso Visibile.",
        subtitle: "ZenCook ridefinisce il paesaggio della cucina. Scopri i piani cottura a induzione sottotop più avanzati del mondo. Nessun disordine, solo puro calore.",
        explore: "Esplora Collezione",
        tinyLink: "Modulo Tiny House",
        sensorInfo: "Sensore di Intelligenza Superficiale / Modalità Attiva",
        card1Tag: "Edizione Speciale",
        card1Title: "Modulo Tiny House",
        card1Desc: "Integrazione lavello e piano cottura pronta all'uso per la vita nomade e le micro-case.",
        card1Link: "Visualizza Moduli Integrati",
        card2Tag: "Il Giornale",
        card2Title: "Arti Culinarie",
        card2Desc: "Gastronomia molecolare e ricette a induzione curate per lo chef moderno.",
        card2Link: "Esplora il Blog",
        card3Tag: "Analisi",
        card3Title: "Confronta Sezioni",
        card3Desc: "Confronta le configurazioni Zen a 2 e 4 fuochi per i tuoi spazi.",
        card3Link: "Confronto Specifiche"
      },
      tinyLiving: {
        tag: "Edizione Speciale",
        title1: "Modulo",
        title2: "Zen",
        title3: "Nomad",
        diagramTag1: "Zona a Induzione",
        diagramTag2: "Bacino del Lavello",
        feature1: "Design Plug & Play",
        feature2: "Cucina Nomade",
        heading: "Cucina Completa, Impronta Zero",
        desc: "Progettato esplicitamente per Tiny House e roulotte moderne. Il modulo ZenNomad combina la nostra tecnologia a induzione invisibile con un lavello a scomparsa di alta qualità in un'unica superficie plug-and-play. Precablato, preidramente connesso e pronto per essere inserito in qualsiasi spazio compatto sul bancone.",
        btn: "Preordina Modulo",
        specs: [
          { label: "Integrazione", value: "Senza Soluzione di Continuità" },
          { label: "Modulo Lavello", value: "Finitura in Titanio di Alta Qualità" },
          { label: "Corrente Assorbita", value: "Ottimizzato per Off-Grid (12V/220V)" },
          { label: "Dimensioni", value: "Compatto: 80cm x 40cm" }
        ]
      },
      products: {
        titlePart1: "La",
        titleHighlight: "Collezione",
        titlePart2: "Invisibile",
        subtitle: "Una perfetta integrazione tra potenza e design. I nostri piani cottura si nascondono completamente sotto le superfici in porcellana o ceramica, rivelandosi solo attraverso proiezioni luminose minimaliste.",
        mapVis: "Mappatura della Superficie",
        maxPower: "Potenza Max",
        zones: "Zone",
        surfaceConfig: "Config. Superficie",
        compareLink: "Confronta le specifiche",
        list: [
          {
            name: 'Zen 2-Fuochi',
            subtitle: 'Brillantezza Compatta',
            desc: 'Ideale per appartamenti in città e cucine secondarie. Due zone invisibili ad alta potenza.'
          },
          {
            name: 'Zen 4-Fuochi',
            subtitle: 'Lo standard Culinario',
            desc: 'La configurazione standard per le case moderne. Quattro zone di cottura flessibili con tecnologia bridge.'
          },
          {
            name: 'Zen 6-Fuochi Pro',
            subtitle: 'Massima Libertà',
            desc: 'Per lo chef di casa professionista. Sei zone con riconoscimento automatico della pentola e controllo della potenza a scorrimento.'
          }
        ]
      },
      compare: {
        titlePart1: "Confronta",
        titlePart2: "Specifiche",
        subtitle: "Analizza gli aspetti tecnici della serie ZenCook per trovare la configurazione perfetta per il tuo progetto architettonico.",
        featureTh: "Caratteristica",
        models: ['Zen 2-Fuochi', 'Zen 4-Fuochi', 'Zen 6-Fuochi Pro', 'Modulo ZenNomad'],
        featureNames: [
          'Zone di Cottura',
          'Potenza Massima',
          'Compatibilità Materiale',
          'Interfaccia Raggio di Luce',
          'Connessione Smartphone',
          'Rilevamento Automatico',
          'Funzione Booster',
          'Installazione'
        ],
        valuesMatrix: [
          ['2', '4', '6 (Bridge)', '2 + Lavello'],
          ['3.6 kW', '7.2 kW', '10.8 kW', '3.6 kW'],
          ['Porcellana 12-20mm', 'Porcellana 12-20mm', 'Porcellana 12-20mm (Tutte)', 'Superficie Inclusa'],
          ['Sì', 'Sì', 'Sì', 'Sì'],
          ['No', 'Sì', 'Sì', 'Sì'],
          ['No', 'No', 'Sì', 'No'],
          ['Sì', 'Sì', 'Sì', 'Sì'],
          ['Professionale', 'Professionale', 'Professionale', 'Plug & Play']
        ]
      },
      journal: {
        titlePart1: "Il",
        titlePart2: "Giornale",
        subtitle: "Tecniche culinarie, integrazione architettonica e ricette.",
        masterclassTag: "Masterclass",
        masterclassTitle: "Cucinare Senza Confini",
        masterclassDesc: "Un viaggio visivo attraverso la preparazione di un pasto di 5 portate su una superficie del bancone completamente vuota.",
        posts: [
          {
            category: 'Ricetta',
            title: 'Filetto Sous Vide con Induzione Invisibile',
            excerpt: 'Il controllo preciso della temperatura consente una rosolatura perfetta direttamente sulla superficie in porcellana.',
            date: '12 Ott'
          },
          {
            category: 'Architettura',
            title: 'La Filosofia della Cucina Minimalista',
            excerpt: 'Perché nascondere gli elettrodomestici crea un ambiente più tranquillo per la creatività culinaria.',
            date: '08 Ott'
          },
          {
            category: 'Innovazione',
            title: 'Comprendere l\'Intelligenza della Superficie',
            excerpt: 'Come ZenCook mappa le dimensioni e il materiale della padella per ottimizzare le onde magnetiche.',
            date: '29 Set'
          },
          {
            category: 'Ricetta',
            title: 'Caramellizzazione dello Zucchero a 180°C',
            excerpt: 'La delicata arte della stabilità della temperatura utilizzando i nostri sensori reattivi.',
            date: '15 Set'
          }
        ]
      }
    }
  },
  ar: {
    translation: {
      nav: {
        products: "المنتجات",
        tinyLiving: "المنازل الصغيرة",
        recipes: "الوصفات",
        compare: "مقارنة",
        contact: "اتصل بنا"
      },
      footer: {
        rights: "أنظمة ZenCook المتقدمة. جميع الحقوق محفوظة.",
        cities: ["لندن", "اسطنبول", "ميلان"]
      },
      home: {
        titlePart1: "تكنولوجيا",
        titleTech: "غير مرئية",
        titlePart2: "فخامة مرئية.",
        subtitle: "ZenCook تعيد تعريف مشهد المطبخ. جرب أفضل مسطحات الحث المخفية تحت السطح في العالم. لا فوضى، فقط حرارة نقية.",
        explore: "استكشف المجموعة",
        tinyLink: "وحدة المنازل الصغيرة",
        sensorInfo: "مستشعر ذكاء السطح / الوضع النشط",
        card1Tag: "إصدار خاص",
        card1Title: "وحدة المنازل الصغيرة",
        card1Desc: "تكامل حوض وموقد جاهز للاستخدام للعيش المتنقل والمنازل الصغيرة.",
        card1Link: "عرض الوحدات المدمجة",
        card2Tag: "المجلة",
        card2Title: "فنون الطهي",
        card2Desc: "فن الطهي الجزيئي ووصفات الحث المختارة للطاهي الحديث.",
        card2Link: "استكشف المدونة",
        card3Tag: "تحليل",
        card3Title: "مقارنة السلسلة",
        card3Desc: "قارن بين إعدادات Zen ذات الشعلتين والأربع شعلات لمساحتك.",
        card3Link: "مقارنة المواصفات"
      },
      tinyLiving: {
        tag: "إصدار خاص",
        title1: "وحدة",
        title2: "Zen",
        title3: "Nomad",
        diagramTag1: "منطقة الحث",
        diagramTag2: "حوض المغسلة",
        feature1: "تصميم التوصيل والتشغيل",
        feature2: "مطبخ متنقل",
        heading: "مطبخ كامل، مساحة صفرية",
        desc: "مصمم خصيصًا للمنازل الصغيرة والقوافل الحديثة. تجمع وحدة ZenNomad بين تقنية الحث غير المرئية الخاصة بنا وحوض مخفي عالي الجودة في سطح واحد للتوصيل والتشغيل. موصل ومجهز وجاهز للإسقاط في أي مساحة سطح مدمجة.",
        btn: "اطلب الوحدة مسبقًا",
        specs: [
          { label: "التكامل", value: "سلس من الحافة إلى الحافة" },
          { label: "وحدة الحوض", value: "لمسة نهائية عالية الجودة من التيتانيوم" },
          { label: "سحب الطاقة", value: "محسن للعمل خارج الشبكة (12V/220V)" },
          { label: "الأبعاد", value: "مدمج: 80 سم × 40 سم" }
        ]
      },
      products: {
        titlePart1: "المجموعة",
        titleHighlight: "غير المرئية",
        titlePart2: "",
        subtitle: "تكامل سلس بين القوة والتصميم. تختفي مواقدنا بالكامل تحت أسطح البورسلين أو السيراميك الخاصة بك، ولا تكشف عن نفسها إلا من خلال نتوءات ضوئية بسيطة.",
        mapVis: "محاكاة خريطة السطح",
        maxPower: "اقصى طاقة",
        zones: "المناطق",
        surfaceConfig: "اعداد السطح",
        compareLink: "مقارنة المواصفات",
        list: [
          {
            name: 'Zen شعلتين',
            subtitle: 'تألق مدمج',
            desc: 'مثالي للشقق الحضرية والمطابخ الثانوية. منطقتان غیر مرئيتان عاليتي الطاقة.'
          },
          {
            name: 'Zen أربع شعلات',
            subtitle: 'معيار الطهي',
            desc: 'الإعداد القياسي للمنازل الحديثة. أربع مناطق طهي مرنة مع تكنولوجيا الجسر.'
          },
          {
            name: 'Zen ست شعلات برو',
            subtitle: 'أقصى درجات الحرية',
            desc: 'لطاهي المنزل المحترف. ست مناطق مع التعرف التلقائي على المقالي والتحكم في الطاقة المنزلقة.'
          }
        ]
      },
      compare: {
        titlePart1: "مقارنة",
        titlePart2: "المواصفات",
        subtitle: "قم بتحليل الجوانب الفنية لسلسلة ZenCook للعثور على الإعداد المثالي لمشروعك المعماري.",
        featureTh: "الميزة",
        models: ['Zen شعلتين', 'Zen أربع شعلات', 'Zen 6 شعلات برو', 'وحدة ZenNomad'],
        featureNames: [
          'مناطق الطهي',
          'أقصى ناتج للطاقة',
          'توافق مواد السطح',
          'واجهة شعاع الضوء',
          'اتصال بالهاتف الذكي',
          'التعرف التلقائي على المقلاة',
          'وظيفة الداعم',
          'التركيب'
        ],
        valuesMatrix: [
          ['2', '4', '6 (جسر)', '2 + حوض'],
          ['3.6 كيلو واط', '7.2 كيلو واط', '10.8 كيلو واط', '3.6 كيلو واط'],
          ['12-20 مم بورسلين', '12-20 مم بورسلين', '12-20 مم بورسلين (الكل)', 'يشتمل على السطح'],
          ['نعم', 'نعم', 'نعم', 'نعم'],
          ['لا', 'نعم', 'نعم', 'نعم'],
          ['لا', 'لا', 'نعم', 'لا'],
          ['نعم', 'نعم', 'نعم', 'نعم'],
          ['احترافي', 'احترافي', 'احترافي', 'توصيل وتشغيل']
        ]
      },
      journal: {
        titlePart1: "",
        titlePart2: "المجلة",
        subtitle: "تقنيات الطهي، والتكامل المعماري، والوصفات.",
        masterclassTag: "دورة احترافية",
        masterclassTitle: "الطبخ بلا حدود",
        masterclassDesc: "رحلة بصرية عبر إعداد وجبة من 5 أطباق على سطح عمل فارغ تمامًا.",
        posts: [
          {
            category: 'توصيل وتشغيل',
            title: 'شريحة لحم مطبوخة بالحث غير المرئي',
            excerpt: 'يسمح التحكم الدقيق في درجة الحرارة بالتحمير المثالي مباشرة على سطح البورسلين.',
            date: '12 أكتوبر'
          },
          {
            category: 'هندسة معمارية',
            title: 'فلسفة المطبخ البسيط',
            excerpt: 'لماذا يخلق إخفاء الأجهزة بيئة أكثر هدوءًا للإبداع في الطهي.',
            date: '08 أكتوبر'
          },
          {
            category: 'ابتكار',
            title: 'فهم ذكاء السطح',
            excerpt: 'كيف تقوم ZenCook بتعيين حجم المقلاة والمواد الخاصة بك لتحسين الموجات المغناطيسية.',
            date: '29 سبتمبر'
          },
          {
            category: 'توصيل وتشغيل',
            title: 'كرملة السكر عند 180 درجة مئوية',
            excerpt: 'الفن الدقيق لاستقرار درجة الحرارة باستخدام أجهزة الاستشعار المتجاوبة لدينا.',
            date: '15 سبتمبر'
          }
        ]
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
