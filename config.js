// ============================================================
//  FICHIER DE CONFIGURATION — INVITATION TSIRY & JINNY
//  Modifiez uniquement ce fichier pour mettre à jour
//  les détails de l'invitation. Ne touchez pas index.html.
// ============================================================

const WEDDING_CONFIG = {

  // --- MUSIQUE DE FOND ---
  // Mets le nom de ton fichier audio dans le même dossier wedding/
  // Ex: "music.mp3" — laisser "" pour aucune musique
  music: "music.mp3",

  // --- PHOTO DE FOND (page de garde) ---
  // Mets le nom de ton fichier photo dans le même dossier wedding/
  // Ex: "photo.jpg" — laisser "" pour aucune photo
  coverImage: "photo.jpg",

  // --- NOMS DES MARIÉS ---
  groom: "Tsiry",
  bride: "Jinny",

  // --- FAMILLES (slide d'ouverture) ---
  families: {
    left: {
      parents: "RAVELONARIVO Ratsihosena Frédeline\nRAHARIMINO Honorine",
      child:   "RANDRIANANTENAINA Fanomezantsoa Ranarivelo",
      partner: "et ANDRY NASOLO Harimino",
    },
    right: {
      parents: "RAVOLOLOMANANA Lalanirina\nRAMANANTANY Jean et son épouse",
      child:   "NIRINA Harinjaka Parson",
      partner: "et RASOAZANAMANANA Faravololona Sidonie",
    },
  },

  // --- CÉRÉMONIE ---
  ceremony: {
    date:       "Vendredi 21 Août 2026",
    church:     "FJKM Androndra Fahasoavana",
    churchTime: "10h00",
  },

  // --- RÉCEPTION ---
  reception: {
    venue:     "Anthurium Espace", // ← à remplir
    time:      "12h30",                         // ← à remplir
  },

  // --- DEADLINE RSVP (M-1) ---
  rsvpDeadline: "30 Juillet 2026",

  // --- COULEURS INTERDITES ---
  forbiddenColors: "Fluo",

  // --- GALERIE PHOTOS ---
  // Fichiers déjà compressés en .webp (<200 Ko chacun), à placer dans le dossier wedding/
  galleryImages: [
    "DSC08336.webp", "DSC08355.webp", "DSC08592.webp", "DSC08776.webp",
    "DSC08875.webp", "DSC08913.webp", "DSC09029.webp", "DSC08335.webp",
    "DSC08419.webp", "DSC08748.webp", "DSC08753.webp","IMG20240117154653.webp"
  ],

  // --- CONTACTS RSVP (optionnel, laisser vide si non souhaité) ---
  rsvpContact: "+261 32 68 894 72",  // ex: "+261 34 00 000 00" ou "nom@email.com"

};
