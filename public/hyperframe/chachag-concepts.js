const ASSET = "/assets/";
const PHONE_PRIMARY = "+917978017115";
const PHONE_SECONDARY = "+917539814620";
const WHATSAPP_NUMBER = "919861095786";
const WA = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Chacha%20G%20Graphics%2C%20I%20want%20a%20quote%20for%20printing%20and%20signage.`;
const MAP_LINK = "https://maps.app.goo.gl/3rvcvFrTMQtirerm7";
const GOOGLE_REVIEW_LINK = "https://g.page/r/CQ4UD-myi1PyEAI/review";
const MAP_DIRECTIONS_LINK = "https://www.google.com/maps/dir//Cha+cha+G+Graphics,+Gandhi+Chhak,+Chaudwar,+Odisha+754071/@20.5266633,85.9158172,678m/data=!3m1!1e3!4m16!1m7!3m6!1s0x3a19132670a54e0b:0xf2538bb2e90f140e!2sCha+cha+G+Graphics!8m2!3d20.5266583!4d85.9183921!16s%2Fg%2F11ggvtkjxk!4m7!1m0!1m5!1m1!1s0x3a19132670a54e0b:0xf2538bb2e90f140e!2m2!1d85.9183921!2d20.5266583?authuser=0&entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D";
const MAP_EMBED = "https://www.google.com/maps?q=20.526673352399474,85.91838941454908&z=17&output=embed";
const GALLERY_ROUTE = "#work";
const OPTION_5_ROUTE = "/";
const GALLERY_STORAGE_KEY = "chachagManualGalleryItems";
const GALLERY_FOLDER = "chachag-gallery/";
const YOUTUBE_LINK = "https://www.youtube.com/@chachaggraphics1823";
const INSTAGRAM_LINK = "https://www.instagram.com/chachaggraphics/?hl=en";
const FACEBOOK_LINK = "https://www.facebook.com/profile.php?id=100084567510043";
const WHATSAPP_CHANNEL_LINK = "https://whatsapp.com/channel/0029VaA0LdBHltYIl7nqN845";
const MOTION_BACKGROUNDS = [
  "chachag-videos/office-branding-poster.webp",
  "chachag-videos/inshop-branding-poster.webp",
  "chachag-videos/road-safety-poster.webp"
];

const GALLERY_FALLBACK_MEDIA = [
  "20230819_111500.jpg",
  "20230823_212705.mp4",
  "20230823_220253.mp4",
  "20230907_204617.jpg",
  "20240123_193048.jpg",
  "20240224_201930.jpg",
  "20250331_022410.jpg",
  "20250414_211633.jpg",
  "20250414_211641.mp4",
  "20250414_221632.jpg",
  "20250427_173318.mp4",
  "20250502_214752.mp4",
  "20250503_132829.jpg",
  "20250511_151732.mp4",
  "20250512_143831.jpg",
  "20250525_113354.mp4",
  "20250612_141150.jpg",
  "20250625_201018.mp4",
  "20250627_122506.mp4",
  "20250627_123531.mp4",
  "20250627_155916.mp4",
  "20250627_161914.mp4",
  "20250819_153835.mp4",
  "20250825_145747.jpg",
  "20250904_205350.jpg",
  "20250904_205444.jpg",
  "20251012_182542.jpg",
  "20251210_104252.jpg",
  "20251213_145219.jpg",
  "20251216_170700.jpg",
  "20260127_162549.jpg",
  "20260323_115645.jpg",
  "20260323_121730.jpg",
  "20260415_202036.mp4",
  "20260421_182138.mp4"
];

function readLocalFlag(key, fallback) {
  try {
    return window.localStorage?.getItem(key) || fallback;
  } catch (error) {
    return fallback;
  }
}

function writeLocalFlag(key, value) {
  try {
    window.localStorage?.setItem(key, value);
  } catch (error) {
    // Local storage is only used for visitor preferences.
  }
}

let activeLanguage = readLocalFlag("chachagLanguage", "en");
let activeTheme = readLocalFlag("chachagTheme", "dark");

const i18n = {
  en: {
    about: "About",
    services: "Services",
    trusted: "Trusted",
    gallery: "Gallery",
    reviews: "Reviews",
    process: "Process",
    contact: "Contact",
    whatsapp: "WhatsApp",
    headline: "Signs That Carry Your Name With Pride",
    heroText: "Premium signage, branding and print solutions designed to make businesses, events and storefronts look brighter, sharper and impossible to miss.",
    quote: "Get Quote on WhatsApp",
    work: "View Our Work",
    call: "Call Now",
    core: "Core services",
    steps: "Step process",
    phoneLabel: "Phone",
    whatsappLabel: "WhatsApp",
    emailLabel: "Email",
    serviceAreaLabel: "Service Area",
    officeAddressLabel: "Office Address",
    registeredAddressLabel: "Registered Address",
    aboutTitle: "A local studio with professional standards",
    about1: "Chacha G Graphics started with one simple belief: every business deserves to be seen clearly and remembered well.",
    about2: "From sign boards and safety signage to catalogs, hoardings and corporate branding, we create work that feels sharp, durable and ready for the real world.",
    footerLine: "Built for visibility. Finished with care.",
    trustedClients: "Trusted clients"
  },
  or: {
    about: "ଆମ ବିଷୟରେ",
    services: "ସେବା",
    trusted: "ଭରସା",
    gallery: "ଗ୍ୟାଲେରୀ",
    reviews: "ରିଭ୍ୟୁ",
    process: "ପ୍ରକ୍ରିୟା",
    contact: "ଯୋଗାଯୋଗ",
    whatsapp: "WhatsApp",
    headline: "ଆପଣଙ୍କ ବ୍ରାଣ୍ଡକୁ ସ୍ପଷ୍ଟ, ବଡ଼ ଓ ସ୍ମରଣୀୟ କରନ୍ତୁ",
    heroText: "ବ୍ୟବସାୟ, ଇଭେଣ୍ଟ ଓ ଦୋକାନ ମୁହଁକୁ ଆକର୍ଷଣୀୟ ଏବଂ ସ୍ପଷ୍ଟ କରିବା ପାଇଁ ପ୍ରିମିୟମ୍ ସାଇନେଜ୍, ବ୍ରାଣ୍ଡିଂ ଓ ପ୍ରିଣ୍ଟ ସମାଧାନ।",
    quote: "WhatsApp ରେ କୋଟ୍ ନିଅନ୍ତୁ",
    work: "ଆମ କାମ ଦେଖନ୍ତୁ",
    call: "କଲ୍ କରନ୍ତୁ",
    core: "ମୁଖ୍ୟ ସେବା",
    steps: "କାମ ପ୍ରକ୍ରିୟା",
    phoneLabel: "ଫୋନ୍",
    whatsappLabel: "WhatsApp",
    emailLabel: "ଇମେଲ୍",
    serviceAreaLabel: "ସେବା ଅଞ୍ଚଳ",
    officeAddressLabel: "ଅଫିସ୍ ଠିକଣା",
    registeredAddressLabel: "ପଞ୍ଜୀକୃତ ଠିକଣା",
    aboutTitle: "ପେଶାଦାର ମାନ ସହିତ ଏକ ସ୍ଥାନୀୟ ଷ୍ଟୁଡିଓ",
    about1: "Chacha G Graphics ଏକ ସରଳ ଭାବନାରୁ ଆରମ୍ଭ ହୋଇଛି: ପ୍ରତ୍ୟେକ ବ୍ୟବସାୟ ସ୍ପଷ୍ଟ ଭାବରେ ଦେଖାଯିବା ଏବଂ ମନେ ରହିବା ଯୋଗ୍ୟ।",
    about2: "ସାଇନ୍ ବୋର୍ଡ, ସେଫ୍ଟି ସାଇନେଜ୍, କ୍ୟାଟାଲଗ୍, ହୋର୍ଡିଂ ଓ କର୍ପୋରେଟ୍ ବ୍ରାଣ୍ଡିଂ ପର୍ଯ୍ୟନ୍ତ, ଆମେ ତୀକ୍ଷ୍ଣ, ଟକାଉ ଏବଂ ବାସ୍ତବ କାମ ପାଇଁ ପ୍ରସ୍ତୁତ ଫିନିଶ୍ ଦେଉଛୁ।",
    footerLine: "ଦୃଶ୍ୟମାନତା ପାଇଁ ନିର୍ମିତ। ଯତ୍ନ ସହିତ ସମାପ୍ତ।",
    trustedClients: "ଭରସାଯୋଗ୍ୟ clients"
  }
};

function t(key) {
  return (i18n[activeLanguage] && i18n[activeLanguage][key]) || i18n.en[key] || key;
}

const odiaCopy = {
  "Get Quote on WhatsApp": "WhatsApp ରେ Quote ନିଅନ୍ତୁ",
  "Gallery Admin": "ଗ୍ୟାଲେରୀ ଆଡମିନ୍",
  "Upload finished work photos for Chacha G Graphics": "Chacha G Graphics ପାଇଁ ସମାପ୍ତ କାମର ଫଟୋ ଅପଲୋଡ୍ କରନ୍ତୁ",
  "Keep shop boards, glow signs, flex banners, vinyl, wallpaper, safety signage and event branding photos ready for the public gallery.": "Public gallery ପାଇଁ shop board, glow sign, flex banner, vinyl, wallpaper, safety signage ଓ event branding ଫଟୋ ପ୍ରସ୍ତୁତ ରଖନ୍ତୁ।",
  "Photos": "ଫଟୋ",
  "Manual": "ମାନୁଆଲ୍",
  "Upload": "ଅପଲୋଡ୍",
  "Local": "ଲୋକାଲ୍",
  "Preview": "ପ୍ରିଭ୍ୟୁ",
  "Work Photos": "କାମର ଫଟୋ",
  "Title": "ଶିରୋନାମ",
  "Category": "ଶ୍ରେଣୀ",
  "Short Note": "ଛୋଟ ଟିପ୍ପଣୀ",
  "Add To Gallery": "ଗ୍ୟାଲେରୀରେ ଯୋଡନ୍ତୁ",
  "Clear Gallery": "ଗ୍ୟାଲେରୀ ସଫା କରନ୍ତୁ",
  "Manual Work Gallery": "ମାନୁଆଲ୍ କାମ ଗ୍ୟାଲେରୀ",
  "Photos uploaded from admin preview": "Admin preview ରୁ ଅପଲୋଡ୍ ହୋଇଥିବା ଫଟୋ",
  "Use this page to build the real work gallery before connecting permanent hosting.": "Permanent hosting ସହ ଯୋଡିବା ପୂର୍ବରୁ real work gallery ତିଆରି ପାଇଁ ଏହି page ବ୍ୟବହାର କରନ୍ତୁ।",
  "No work photos uploaded yet.": "ଏପର୍ଯ୍ୟନ୍ତ କୌଣସି କାମର ଫଟୋ ଅପଲୋଡ୍ ହୋଇନାହିଁ।",
  "Choose images above and add them to preview the gallery layout.": "ଉପରୁ image ବାଛନ୍ତୁ ଏବଂ gallery layout preview ପାଇଁ ଯୋଡନ୍ତୁ।",
  "Remove": "ହଟାନ୍ତୁ",
  "Services": "ସେବା",
  "Built for visibility. Finished with care.": "ଦୃଶ୍ୟମାନତା ପାଇଁ ତିଆରି। ଯତ୍ନ ସହିତ ସମାପ୍ତ।",
  "Every board carries a name. Every name carries trust.": "ପ୍ରତ୍ୟେକ ବୋର୍ଡ ଏକ ନାମ ବୋହିଥାଏ। ପ୍ରତ୍ୟେକ ନାମ ଭରସା ବୋହିଥାଏ।",
  "Explore service": "ସେବା ଦେଖନ୍ତୁ",
  "Portfolio / Our Work": "ପୋର୍ଟଫୋଲିଓ / ଆମ କାମ",
  "Realistic signage, printing and branding previews": "ବାସ୍ତବ ସାଇନେଜ୍, ପ୍ରିଣ୍ଟିଂ ଓ ବ୍ରାଣ୍ଡିଂ ପ୍ରିଭ୍ୟୁ",
  "Replace these visuals later with photographed client work. The layout is ready for shop boards, LED/glow sign boards, flex banners, wallpaper, vinyl and print materials.": "ପରେ ଏହି ଭିଜୁଆଲ୍‌ଗୁଡିକୁ ପ୍ରକୃତ କ୍ଲାଇଏଣ୍ଟ କାମର ଫଟୋ ସହିତ ବଦଳାନ୍ତୁ। ଏହି ଲେଆଉଟ୍ ଶପ୍ ବୋର୍ଡ, LED/glow sign board, flex banner, wallpaper, vinyl ଓ print material ପାଇଁ ପ୍ରସ୍ତୁତ।",
  "Get similar design": "ଏହିପରି ଡିଜାଇନ୍ ନିଅନ୍ତୁ",
  "Requirements": "ଆବଶ୍ୟକତା",
  "Made for real-world work": "ବାସ୍ତବ କାମ ପାଇଁ ପ୍ରସ୍ତୁତ",
  "From small business signs to institutional needs, Chacha G Graphics helps Odisha brands stand clearly.": "ଛୋଟ ବ୍ୟବସାୟ ସାଇନ୍ ଠାରୁ ସଂସ୍ଥାଗତ ଆବଶ୍ୟକତା ପର୍ଯ୍ୟନ୍ତ, Chacha G Graphics ବ୍ରାଣ୍ଡକୁ ସ୍ପଷ୍ଟ ଭାବରେ ଦେଖାଏ।",
  "Associations": "ସମ୍ପର୍କ",
  "Brand visibility created for serious names": "ଗମ୍ଭୀର ବ୍ରାଣ୍ଡ ପାଇଁ ଦୃଶ୍ୟମାନତା",
  "Selected names that reflect the kind of professional signage, print and branding work we are prepared to deliver.": "ଆମେ ଯେପରି ପେଶାଦାର ସାଇନେଜ୍, ପ୍ରିଣ୍ଟ ଓ ବ୍ରାଣ୍ଡିଂ କାମ ଦେବାକୁ ପ୍ରସ୍ତୁତ, ସେହି ଗୁଣମାନକୁ ଦର୍ଶାଉଥିବା କିଛି ନାମ।",
  "Reviews & Video": "ରିଭ୍ୟୁ ଓ ଭିଡିଓ",
  "Public proof, live work glimpses and real project confidence": "ଲୋକମତ, କାମର ଝଲକ ଓ ପ୍ରକୃତ ପ୍ରୋଜେକ୍ଟ ଭରସା",
  "Open Google Profile": "Google Profile ଖୋଲନ୍ତୁ",
  "Leave Google Review": "Google Review ଦିଅନ୍ତୁ",
  "Visit YouTube Channel": "YouTube Channel ଦେଖନ୍ତୁ",
  "Google Reviews": "Google Reviews",
  "Public business profile": "Public business profile",
  "Customers can leave a fresh review directly on Google after completing their order.": "Order ସମାପ୍ତ ହେବା ପରେ customers ସିଧାସଳଖ Google ରେ fresh review ଦେଇପାରିବେ।",
  "Latest Feedback": "ନୂତନ Feedback",
  "Google Maps source": "Google Maps source",
  "Watch Our Work": "ଆମ କାମ ଦେଖନ୍ତୁ",
  "Short project glimpses": "ଛୋଟ ପ୍ରୋଜେକ୍ଟ ଝଲକ",
  "Signs, printing, fabrication and installation clips can be featured from YouTube.": "YouTube ରୁ signs, printing, fabrication ଓ installation clips ଦେଖାଯାଇପାରିବ।",
  "Simple Working Process": "ସରଳ କାମ ପ୍ରକ୍ରିୟା",
  "WhatsApp-first coordination from requirement to handover": "ଆବଶ୍ୟକତାରୁ handover ପର୍ଯ୍ୟନ୍ତ WhatsApp-first coordination",
  "Share your requirement, references and sizes directly. We guide you with design, material and pricing.": "ଆପଣଙ୍କ requirement, reference ଓ size ସିଧାସଳଖ share କରନ୍ତୁ। ଆମେ design, material ଓ pricing ରେ guide କରିବୁ।",
  "Why Choose Us": "ଆମକୁ କାହିଁକି ବାଛିବେ",
  "Why people work with us": "ଲୋକମାନେ ଆମ ସହ କାହିଁକି କାମ କରନ୍ତି",
  "Professional signage, printing and branding studio in Choudwar. We create flex banners, shop boards, glow sign boards, LED boards, vinyl, wallpaper, visiting cards and complete brand visibility solutions.": "ଆମେ flex banner, shop board, glow sign board, LED board, vinyl, wallpaper, visiting card ଓ ସମ୍ପୂର୍ଣ୍ଣ brand visibility solution ପ୍ରସ୍ତୁତ କରୁଥିବା ପେଶାଦାର signage, printing ଓ branding studio।",
  "Near Aahar Kendra, Gandhi Chhak, Choudwar, Odisha, India - 754071": "Aahar Kendra ନିକଟରେ, Gandhi Chhak, Choudwar, Odisha, India - 754071",
  "Call 7978017115 / WhatsApp 9861095786": "Call 7978017115 / WhatsApp 9861095786",
  "Near Aahar Kendra": "Aahar Kendra ନିକଟରେ",
  "© 2026 Chacha G Graphics. All Rights Reserved.": "© 2026 Chacha G Graphics. ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ।"
};

function l(text) {
  return activeLanguage === "or" ? (odiaCopy[text] || text) : text;
}

Object.assign(odiaCopy, {
  "Flex Banner Printing": "ଫ୍ଲେକ୍ସ ବ୍ୟାନର୍ ପ୍ରିଣ୍ଟିଂ",
  "Large-format visibility for campaigns, events and shopfront promotion.": "କ୍ୟାମ୍ପେନ୍, ଇଭେଣ୍ଟ ଓ shopfront promotion ପାଇଁ ବଡ଼ ଫର୍ମାଟ୍ visibility।",
  "Wedding Banner Design": "ବିବାହ ବ୍ୟାନର୍ ଡିଜାଇନ୍",
  "Ceremony-ready layouts with sharp photos, names and festive colour.": "ସ୍ପଷ୍ଟ photo, name ଓ festive colour ସହିତ ceremony-ready layout।",
  "Birthday Banner Design": "ଜନ୍ମଦିନ ବ୍ୟାନର୍ ଡିଜାଇନ୍",
  "Bright event banners for birthday, party and family celebrations.": "Birthday, party ଓ family celebration ପାଇଁ bright event banner।",
  "Reception Banner": "ରିସେପ୍ସନ୍ ବ୍ୟାନର୍",
  "Elegant welcome boards and stage-backdrop branding for functions.": "Function ପାଇଁ elegant welcome board ଓ stage-backdrop branding।",
  "Safety Stickers and Signages": "ସେଫ୍ଟି ଷ୍ଟିକର୍ ଓ ସାଇନେଜ୍",
  "Workplace safety stickers, warning visuals and compliance signages for factories and institutions.": "Factory ଓ institution ପାଇଁ workplace safety sticker, warning visual ଓ compliance signage।",
  "Reflective Boards": "ରିଫ୍ଲେକ୍ଟିଭ୍ ବୋର୍ଡ",
  "Reflective road, direction and caution boards built for high visibility outdoors.": "Outdoor high visibility ପାଇଁ reflective road, direction ଓ caution board।",
  "Acrylic Printing, Lollipop Board and Sandwich Board": "ଆକ୍ରିଲିକ୍ ପ୍ରିଣ୍ଟିଂ, ଲଲିପପ୍ ବୋର୍ଡ ଓ ସ୍ୟାଣ୍ଡୱିଚ୍ ବୋର୍ଡ",
  "Acrylic printed panels, lollipop boards and sandwich boards for shops, promotions and directional displays.": "Shop, promotion ଓ directional display ପାଇଁ acrylic printed panel, lollipop board ଓ sandwich board।",
  "Visiting Card": "ଭିଜିଟିଂ କାର୍ଡ",
  "Small cards with sharp first-impression value.": "ସ୍ପଷ୍ଟ first impression ପାଇଁ compact business card।",
  "Shop Board": "ଦୋକାନ ବୋର୍ଡ",
  "Printed and fabricated shop identity made for street visibility.": "Street visibility ପାଇଁ printed ଓ fabricated shop identity।",
  "Glow Sign Board": "ଗ୍ଲୋ ସାଇନ୍ ବୋର୍ଡ",
  "Illuminated signs made to stand out after dark.": "ରାତିରେ ଆକର୍ଷଣ କରିବା ପାଇଁ illuminated signage।",
  "LED Board": "LED ବୋର୍ଡ",
  "Bright LED and display-style signage for high attention.": "ଅଧିକ attention ପାଇଁ bright LED ଓ display-style signage।",
  "Vinyl Printing": "ଭିନାଇଲ୍ ପ୍ରିଣ୍ଟିଂ",
  "Glass, wall and surface graphics for clean branded spaces.": "Glass, wall ଓ surface graphics ପାଇଁ clean branded space।",
  "Wallpaper Printing": "ୱାଲପେପର୍ ପ୍ରିଣ୍ଟିଂ",
  "Printed wall graphics for offices, retail interiors and feature walls.": "Office, retail interior ଓ feature wall ପାଇଁ printed wall graphics।",
  "Premium Name Plate": "ପ୍ରିମିୟମ୍ ନେମ୍ ପ୍ଲେଟ୍",
  "Finished display prints for memories, gifts and interiors.": "Memory, gift ଓ interior ପାଇଁ finished display print।",
  "Digital Paper Printing": "ଡିଜିଟାଲ୍ ପେପର୍ ପ୍ରିଣ୍ଟିଂ",
  "Clean paper prints, booklets, flyers and office-ready material.": "Paper print, booklet, flyer ଓ office-ready material।",
  "Sticker Printing": "ଷ୍ଟିକର୍ ପ୍ରିଣ୍ଟିଂ",
  "Custom contour-cut vinyl stickers for branding, labels and promotions.": "Branding, label ଓ promotion ପାଇଁ custom contour-cut sticker।",
  "Restaurant Board": "ରେଷ୍ଟୁରାଣ୍ଟ ବୋର୍ଡ",
  "Menu, offer and facade boards for food businesses.": "Food business ପାଇଁ menu, offer ଓ facade board।",
  "Business Branding": "ବ୍ୟବସାୟ ବ୍ରାଣ୍ଡିଂ",
  "Complete brand visibility across boards, glass, walls and print.": "Board, glass, wall ଓ print ରେ complete brand visibility।",
  "All": "ସବୁ",
  "Banner": "ବ୍ୟାନର୍",
  "Signage": "ସାଇନେଜ୍",
  "Cards": "କାର୍ଡ",
  "Event": "ଇଭେଣ୍ଟ",
  "Branding": "ବ୍ରାଣ୍ଡିଂ",
  "Nonlit Board": "ନନ୍-ଲିଟ୍ ବୋର୍ଡ",
  "Premium Business Cards": "ପ୍ରିମିୟମ୍ ବିଜନେସ୍ କାର୍ଡ",
  "Safety Signages": "ସେଫ୍ଟି ସାଇନେଜ୍",
  "Lable Cutting": "ଲେବେଲ୍ କଟିଂ",
  "Flex Banner": "ଫ୍ଲେକ୍ସ ବ୍ୟାନର୍",
  "Flex banner for All events.": "ସମସ୍ତ event ପାଇଁ flex banner।",
  "Large-format flex for offers, campaigns and public visibility.": "Offer, campaign ଓ public visibility ପାଇଁ large-format flex।",
  "Street-facing non-lit board with clear readable branding.": "ସ୍ପଷ୍ଟ ପଢିହେବା branding ସହିତ street-facing non-lit board।",
  "Night-visible illuminated signage with premium glow.": "Premium glow ସହିତ night-visible illuminated signage।",
  "Industrial Safety Signages": "ଇଣ୍ଡଷ୍ଟ୍ରିଆଲ୍ ସେଫ୍ଟି ସାଇନେଜ୍",
  "Warning, caution, direction and workplace safety boards for industrial sites.": "Industrial site ପାଇଁ warning, caution, direction ଓ workplace safety board।",
  "Compact business identity with crisp premium print finish.": "Crisp premium print finish ସହିତ compact business identity।",
  "Wallpaper": "ୱାଲପେପର୍",
  "Office and interior wall graphics for branded environments.": "Branded environment ପାଇଁ office ଓ interior wall graphics।",
  "Glass, door and surface graphics for commercial spaces.": "Commercial space ପାଇଁ glass, door ଓ surface graphics।",
  "Menu, offer and facade boards for food brands.": "Food brand ପାଇଁ menu, offer ଓ facade board।",
  "Sunboard Branding": "ସନ୍‌ବୋର୍ଡ ବ୍ରାଣ୍ଡିଂ",
  "Fashion or shoe-store wall branding with crisp sunboard panels.": "Fashion କିମ୍ବା shoe-store wall branding ପାଇଁ crisp sunboard panel।",
  "Standee & Canopy": "ଷ୍ଟାଣ୍ଡି ଓ କାନୋପି",
  "Event wooden standee, rollup standee and canopy branding setup.": "Event wooden standee, rollup standee ଓ canopy branding setup।",
  "Label Cutting": "ଲେବେଲ୍ କଟିଂ",
  "Contour-cut labels, decals and stickers for products, safety and branding.": "Product, safety ଓ branding ପାଇଁ contour-cut label, decal ଓ sticker।",
  "Requirement discussion": "ଆବଶ୍ୟକତା ଆଲୋଚନା",
  "Design and material suggestion": "ଡିଜାଇନ୍ ଓ ସାମଗ୍ରୀ ପରାମର୍ଶ",
  "Quote and approval": "ଦର ଓ ଅନୁମୋଦନ",
  "Production": "ପ୍ରସ୍ତୁତି",
  "Delivery or installation support": "ଡେଲିଭେରି କିମ୍ବା ଇନ୍‌ଷ୍ଟଲେସନ୍ ସହଯୋଗ",
  "Fast Response": "ଦ୍ରୁତ ପ୍ରତିକ୍ରିୟା",
  "We listen quickly and move with purpose.": "ଆମେ ଶୀଘ୍ର ଶୁଣୁ ଓ ସଠିକ୍ ଭାବରେ କାମ କରୁ।",
  "Fair Pricing": "ଯୁକ୍ତିସଙ୍ଗତ ଦର",
  "Practical costs for serious work.": "ଗୁଣମାନ କାମ ପାଇଁ practical cost।",
  "Custom Design": "କଷ୍ଟମ୍ ଡିଜାଇନ୍",
  "Made for the name, space and purpose.": "Name, space ଓ purpose ଅନୁସାରେ ତିଆରି।",
  "Premium Finish": "ପ୍ରିମିୟମ୍ ଫିନିଶ୍",
  "Clean materials. Sharp presentation.": "Clean material ଓ sharp presentation।",
  "Odia and English Support": "ଓଡ଼ିଆ ଓ ଇଂରାଜୀ ସହଯୋଗ",
  "Local-language design help for businesses, events and institutions.": "Business, event ଓ institution ପାଇଁ local-language design help।",
  "Real-world Signage Expertise": "ବାସ୍ତବ ସାଇନେଜ୍ ଅଭିଜ୍ଞତା",
  "Boards, materials, lighting and installation are considered from the start.": "Board, material, lighting ଓ installation ଆରମ୍ଭରୁ plan କରାଯାଏ।",
  "Government & Tender Work": "ସରକାରୀ ଓ Tender କାମ",
  "Clear output for formal requirements.": "Formal requirement ପାଇଁ clear output।",
  "Names that look ready for the market.": "Market-ready ଦେଖାଯାଉଥିବା brand name।",
  "Safety & Compliance": "ସୁରକ୍ଷା ଓ ନିୟମାନୁସାରିତା",
  "Signs people can notice and follow.": "ଲୋକମାନେ ଦେଖି follow କରିପାରିବା sign।",
  "Procurement Supply": "ସପ୍ଲାଇ ସମନ୍ୱୟ",
  "Simple coordination under one roof.": "ଗୋଟିଏ ଜାଗାରୁ simple coordination।",
  "Retail & Commercial Visibility": "ରିଟେଲ୍ ଓ ବ୍ୟବସାୟିକ ଦୃଶ୍ୟମାନତା",
  "More presence where customers look.": "Customers ଯେଉଁଠି ଦେଖନ୍ତି ସେଠି ଅଧିକ presence।",
  "Marketing Campaigns": "ମାର୍କେଟିଂ କ୍ୟାମ୍ପେନ୍",
  "Prints that carry the message clearly.": "Message କୁ ସ୍ପଷ୍ଟ ଭାବରେ ବୋହିଥିବା print।",
  "Industrial And Road Safety": "ଇଣ୍ଡଷ୍ଟ୍ରିଆଲ୍ ଓ ରୋଡ୍ ସେଫ୍ଟି",
  "Branding Solution Suites": "ବ୍ରାଣ୍ଡିଂ ସୋଲୁସନ୍ ସୁଇଟ୍",
  "One studio for safety signs, office branding and inshop visibility": "ସେଫ୍ଟି ସାଇନ୍, ଅଫିସ୍ ବ୍ରାଣ୍ଡିଂ ଓ ଇନ୍‌ଶପ୍ visibility ପାଇଁ ଗୋଟିଏ studio",
  "Move through three focused service worlds built for workplaces, offices and retail spaces.": "Workplace, office ଓ retail space ପାଇଁ ତିଆରି ହୋଇଥିବା ତିନୋଟି focused service world ଦେଖନ୍ତୁ।",
  "Reflective signs, caution boards, direction boards and factory safety visuals": "Reflective sign, caution board, direction board ଓ factory safety visual",
  "Built for locations where information must be visible, durable and understood quickly by workers, visitors and traffic.": "Worker, visitor ଓ traffic ପାଇଁ information visible, durable ଓ quickly understood ହେବା ଦରକାର ଥିବା ସ୍ଥାନ ପାଇଁ।",
  "Warning, caution and mandatory instruction boards.": "Warning, caution ଓ mandatory instruction board।",
  "Road Safety Boards": "ରୋଡ୍ ସେଫ୍ଟି ବୋର୍ଡ",
  "Reflective direction, traffic and work-zone signage.": "Reflective direction, traffic ଓ work-zone signage।",
  "Safety Posters": "ସେଫ୍ଟି ପୋଷ୍ଟର୍",
  "Do's, don'ts, emergency and compliance information.": "Do's, don'ts, emergency ଓ compliance information।",
  "Office Branding Suite": "ଅଫିସ୍ ବ୍ରାଣ୍ଡିଂ ସୁଇଟ୍",
  "Reception wall, wallpaper, glass vinyl and stationery in one visual system": "Reception wall, wallpaper, glass vinyl ଓ stationery ଗୋଟିଏ visual system ରେ",
  "This option is best if Chacha G Graphics wants to attract offices, clinics, coaching centers, showrooms and corporate interiors.": "Office, clinic, coaching center, showroom ଓ corporate interior client କୁ attract କରିବା ପାଇଁ ଏହା best।",
  "Wallpaper Branding": "ୱାଲପେପର୍ ବ୍ରାଣ୍ଡିଂ",
  "Large wall visuals for reception and office interiors.": "Reception ଓ office interior ପାଇଁ large wall visual।",
  "Glass Vinyl": "ଗ୍ଲାସ୍ ଭିନାଇଲ୍",
  "One-way vision, frosted vinyl and privacy graphics.": "One-way vision, frosted vinyl ଓ privacy graphics।",
  "Stationery Set": "ଷ୍ଟେସନେରୀ ସେଟ୍",
  "Business cards, letterheads and tabletop identity.": "Business card, letterhead ଓ tabletop identity।",
  "Inshop Branding": "ଇନ୍‌ଶପ୍ ବ୍ରାଣ୍ଡିଂ",
  "Glow boards, ACP LED boards, sunboard walls, posters and retail display systems": "Glow board, ACP LED board, sunboard wall, poster ଓ retail display system",
  "Designed for shops and showrooms that need instant visibility, clean product communication and strong walk-in appeal.": "Instant visibility, clean product communication ଓ strong walk-in appeal ଦରକାର ଥିବା shop/showroom ପାଇଁ।",
  "Illuminated front identity for night visibility.": "Night visibility ପାଇଁ illuminated front identity।",
  "Fashion, shoes and retail wall branding panels.": "Fashion, shoes ଓ retail wall branding panel।",
  "Posters And Leaflets": "ପୋଷ୍ଟର୍ ଓ ଲିଫଲେଟ୍",
  "Offer posters, counter visuals and campaign prints.": "Offer poster, counter visual ଓ campaign print।",
  "Signage Studio": "ସାଇନେଜ୍ ଷ୍ଟୁଡିଓ",
  "Choudwar, Odisha": "ଚୌଦ୍ୱାର, ଓଡ଼ିଶା",
  "Trusted by 13+ brands across Odisha": "ଓଡ଼ିଶାର 13+ ବ୍ରାଣ୍ଡର ଭରସା",
  "Glow Sign": "ଗ୍ଲୋ ସାଇନ୍",
  "Vinyl & Wallpaper": "ଭିନାଇଲ୍ ଓ ୱାଲପେପର୍",
  "Before": "ପୂର୍ବରୁ",
  "After": "ପରେ",
  "Drag to see the transformation": "ପରିବର୍ତ୍ତନ ଦେଖିବାକୁ ଟାଣନ୍ତୁ"
});

// Replace these local image paths with final photographed shop-board, printing machine,
// LED board, wallpaper and customer portfolio assets when they are available.
const services = [
  ["Flex Banner Printing", "Large-format visibility for campaigns, events and shopfront promotion.", "optimized/portfolio/generated-flex-banner.webp"],
  ["Safety Stickers and Signages", "Workplace safety stickers, warning visuals and compliance signages for factories and institutions.", "optimized/portfolio/industrial-safety-signages.webp"],
  ["Reflective Boards", "Reflective road, direction and caution boards built for high visibility outdoors.", "optimized/portfolio/service-traffic.webp"],
  ["Visiting Card", "Small cards with sharp first-impression value.", "optimized/portfolio/generated-visiting-card.webp"],
  ["Shop Board", "Printed and fabricated shop identity made for street visibility.", "optimized/portfolio/generated-shop-board.webp"],
  ["Glow Sign Board", "Illuminated signs made to stand out after dark.", "optimized/portfolio/generated-glow-sign-board.webp"],
  ["LED Board", "Bright LED and display-style signage for high attention.", "optimized/portfolio/video-wall.webp"],
  ["Vinyl Printing", "Glass, wall and surface graphics for clean branded spaces.", "optimized/portfolio/generated-vinyl-printing.webp"],
  ["Wallpaper Printing", "Printed wall graphics for offices, retail interiors and feature walls.", "optimized/portfolio/generated-wallpaper-branding.webp"],
  ["Premium Name Plate", "Finished display prints for memories, gifts and interiors.", "optimized/portfolio/product-nameplate.webp"],
  ["Digital Paper Printing", "Clean paper prints, booklets, flyers and office-ready material.", "optimized/portfolio/service-posters-flyers.webp"],
  ["Sticker Printing", "Custom contour-cut vinyl stickers for branding, labels and promotions.", "optimized/portfolio/service-shapecut-stickers.webp"],
  ["Acrylic Printing, Lollipop Board and Sandwich Board", "Acrylic printed panels, lollipop boards and sandwich boards for shops, promotions and directional displays.", "optimized/portfolio/generated-office-wall-acrylic-lollipop-sandwich.webp"],
  ["Restaurant Board", "Menu, offer and facade boards for food businesses.", "optimized/portfolio/generated-restaurant-branding-service.webp"],
  ["Business Branding", "Complete brand visibility across boards, glass, walls and print.", "optimized/portfolio/workshop-process.webp"]
];

const portfolio = [
  ["Flex Banner", "optimized/portfolio/generated-flex-banner.webp", "Banner", "Large-format flex for offers, campaigns and public visibility.", ["Banner"]],
  ["Shop Board", "optimized/portfolio/generated-shop-board.webp", "Nonlit Board", "Street-facing non-lit board with clear readable branding.", ["Signage", "Nonlit Board"]],
  ["Glow Sign Board", "optimized/portfolio/generated-glow-sign-board.webp", "Glow Sign Board", "Night-visible illuminated signage with premium glow.", ["Signage", "Glow Sign Board"]],
  ["Industrial Safety Signages", "optimized/portfolio/industrial-safety-signages.webp", "Safety Signages", "Warning, caution, direction and workplace safety boards for industrial sites.", ["Signage", "Safety Signages"]],
  ["Visiting Card", "optimized/portfolio/generated-visiting-card.webp", "Premium Business Cards", "Compact business identity with crisp premium print finish.", ["Cards", "Premium Business Cards"]],
  ["Wallpaper", "optimized/portfolio/generated-wallpaper-branding.webp", "Branding", "Office and interior wall graphics for branded environments.", ["Branding"]],
  ["One Way Vision and Glass Films", "optimized/portfolio/generated-vinyl-printing.webp", "Branding", "Glass, door and surface graphics for commercial spaces.", ["Branding"]],
  ["Store Branding", "optimized/portfolio/generated-restaurant-board.webp", "Signage", "Menu, offer and facade boards for food brands.", ["Signage"]],
  ["Sunboard Branding", "optimized/portfolio/generated-sunboard-branding.webp", "Branding", "Fashion or shoe-store wall branding with crisp sunboard panels.", ["Branding"]],
  ["Standee & Canopy", "optimized/portfolio/generated-standee-canopy.webp", "Event", "Event wooden standee, rollup standee and canopy branding setup.", ["Event", "Branding"]],
  ["Label Cutting", "optimized/portfolio/service-shapecut-stickers.webp", "Lable Cutting", "Contour-cut labels, decals and stickers for products, safety and branding.", ["Lable Cutting", "Branding"]],
  ["Outdoor Hoarding", "optimized/portfolio/service-hoarding.webp", "Signage", "Large outdoor advertisement hoarding for brand campaigns, roadside visibility and public promotions.", ["Signage", "Banner"]]
];

const steps = [
  "Requirement discussion",
  "Design and material suggestion",
  "Quote and approval",
  "Production",
  "Delivery or installation support"
];

const why = [
  ["Fast Response", "We listen quickly and move with purpose."],
  ["Fair Pricing", "Practical costs for serious work."],
  ["Custom Design", "Made for the name, space and purpose."],
  ["Premium Finish", "Clean materials. Sharp presentation."],
  ["Odia and English Support", "Local-language design help for businesses, events and institutions."],
  ["Real-world Signage Expertise", "Boards, materials, lighting and installation are considered from the start."]
];

const clients = [
  ["NHM Odisha", "client-logos/NHM logo.webp", "#FFFFFF"],
  ["Maple Highways", "client-logos/Mapel Logo.webp", "#FFFFFF"],
  ["IMFA", "client-logos/Imfa logo.webp", "#FFFFFF"],
  ["BIPF", "client-logos/BIPF Logo.webp", "#FFFFFF"],
  ["The BIPF School", "client-logos/BIPF School Logo.webp", "#FFFFFF"],
  ["Rollick Ice Cream", "client-logos/Rollick Logo.webp", "#EE0E6E"],
  ["Fragola", "client-logos/Fragola Logo.webp", "#FFFFFF"],
  ["IVTEX", "client-logos/IVTEX logo.webp", "#FFFFFF"],
  ["ESI Odisha", "client-logos/ESI Logo.webp", "#FFFFFF"],
  ["Trupti Automotives", "client-logos/Trupti Automotive logo.webp", "#FFFFFF"],
  ["KRL Infratech", "client-logos/krl logo.webp", "#FFFFFF"],
  ["Choudwar College", "client-logos/Choudwar College.webp", "#FFFFFF"],
  ["ITT Choudwar", "client-logos/ITT logo.webp", "#FFFFFF"]
];

// Real verbatim Google reviews from the verified Chacha G Graphics Business Profile
// (4.9 average from 66 reviews). Lightly cleaned for capitalisation only.
const googleReviewCards = [
  {
    title: "Saloni Sahoo",
    meta: "★★★★★ · Google",
    text: "I have been a customer of this store. They do clean and well-maintained work with an extremely reasonable price. Their service is always perfect, fast and efficient. Highly recommended!",
    action: "Read on Google",
    href: MAP_LINK
  },
  {
    title: "Sunil Kumar Sahoo",
    meta: "★★★★★ · Local Guide",
    text: "The best graphics with affordable price.",
    action: "Read on Google",
    href: MAP_LINK
  },
  {
    title: "Pradipta Khuntia",
    meta: "★★★★★ · Google",
    text: "Great design thought of graphics. Best quality materials and colour usage.",
    action: "Read on Google",
    href: MAP_LINK
  },
  {
    title: "Rabinarayan Rout",
    meta: "★★★★★ · Google",
    text: "I would like to express my sincere gratitude to Cha Cha G Graphics for their valuable support.",
    action: "Read on Google",
    href: MAP_LINK
  },
  {
    title: "Roshan Narayan",
    meta: "★★★★★ · Google",
    text: "Very affordable and awesome work — give it a try.",
    action: "Read on Google",
    href: MAP_LINK
  },
  {
    title: "Ehasan Khan",
    meta: "★★★★★ · Google",
    text: "Work is very very nice.",
    action: "Read on Google",
    href: MAP_LINK
  },
  {
    title: "Sagar Kumar Pradhan",
    meta: "★★★★★ · Google",
    text: "Excellent work, fast work, and the employees are also good.",
    action: "Read on Google",
    href: MAP_LINK
  },
  {
    title: "Shuvam Nanda",
    meta: "★★★★★ · Google",
    text: "Very affordable services and skilled artists in graphics design.",
    action: "Read on Google",
    href: MAP_LINK
  },
  {
    title: "Binod Behera",
    meta: "★★★★★ · Google",
    text: "Great service. Artistic work.",
    action: "Read on Google",
    href: MAP_LINK
  },
  {
    title: "See all 66 reviews",
    meta: "4.9 ★ average on Google",
    text: "Read every review on our verified Google Business Profile — or add your own.",
    action: "Open Google Profile",
    href: MAP_LINK
  }
];

function reviewAvatar(name, index) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
  const palettes = [
    ["#22d3ee", "#2563eb", "#facc15"],
    ["#fb7185", "#7c3aed", "#38bdf8"],
    ["#34d399", "#0f766e", "#fde047"],
    ["#f97316", "#dc2626", "#67e8f9"],
    ["#a78bfa", "#4338ca", "#fb7185"],
    ["#2dd4bf", "#0ea5e9", "#f59e0b"]
  ];
  const [a, b, c] = palettes[index % palettes.length];

  return `
    <div class="review-avatar" style="--avatar-a:${a};--avatar-b:${b};--avatar-c:${c};" aria-hidden="true">
      <svg viewBox="0 0 96 96" role="img" focusable="false">
        <defs>
          <linearGradient id="avatarGrad${index}" x1="12" y1="12" x2="84" y2="84">
            <stop offset="0" stop-color="var(--avatar-a)" />
            <stop offset="1" stop-color="var(--avatar-b)" />
          </linearGradient>
        </defs>
        <circle class="avatar-bg" cx="48" cy="48" r="45" fill="url(#avatarGrad${index})" />
        <path class="avatar-hair" d="M24 44c3-18 17-29 34-25 12 3 18 11 18 24-11-9-25-11-44-4-2 1-5 3-8 5Z" />
        <circle class="avatar-face" cx="48" cy="52" r="24" />
        <circle class="avatar-eye" cx="39" cy="50" r="2.8" />
        <circle class="avatar-eye" cx="57" cy="50" r="2.8" />
        <path class="avatar-smile" d="M38 61c5 6 15 6 20 0" />
        <path class="avatar-shirt" d="M22 88c4-16 14-24 26-24s22 8 26 24" />
        <text x="48" y="83" text-anchor="middle">${initials}</text>
      </svg>
    </div>
  `;
}

const concepts = {
  "chachag-option-5": {
    theme: "office",
    title: "Chacha G Graphics Company Profile",
    seoTitle: "Chacha G Graphics — Signage, Branding & Printing in Choudwar, Odisha",
    eyebrow: "Choudwar, Odisha / Signage, Branding & Printing",
    headline: "Signs That Carry Your Name With Pride",
    intro: "A cinematic company profile for a local studio with professional standards, serving signage, branding, printing, safety boards, traffic signs, hoardings, wallpaper and corporate branding needs across Odisha.",
    image: "chachag-videos/office-branding-poster.webp",
    mood: "Office branding, wallpaper, glass vinyl",
    extra: "office",
    layout: "video",
    motionBg: "chachag-videos/office-branding-poster.webp",
    motionPlaylist: MOTION_BACKGROUNDS
  }
};

function asset(path) {
  return `${ASSET}${path}`;
}

function logoForTheme() {
  return asset(activeTheme === "light" ? "chacha-g-logo-black.svg" : "chacha-g-logo-white.svg");
}

function glyph(name) {
  const paths = {
    phone: `<path d="M7.5 6.6c.2-.6.8-1 1.5-1h2.1c.6 0 1.1.4 1.3 1l.8 2.2c.2.6 0 1.2-.5 1.6l-1.1.9a16.2 16.2 0 0 0 5.1 5.1l.9-1.1c.4-.5 1-.7 1.6-.5l2.2.8c.6.2 1 .7 1 1.3V19c0 .7-.4 1.3-1 1.5-1 .4-2.1.5-3.1.4C12.2 20.2 7.8 15.8 7.1 9.7c-.1-1 0-2.1.4-3.1Z"/>`,
    whatsapp: `<path d="M7.8 20.2 8.7 17A7.2 7.2 0 1 1 12 19.2l-4.2 1Z"/><path d="M10.5 9.2c.2-.5.4-.6.7-.6h.5c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.5.6c-.1.1-.2.3 0 .5.5.9 1.3 1.6 2.2 2.1.2.1.4.1.5-.1l.7-.8c.2-.2.4-.2.7-.1l1.8.8c.3.1.4.3.4.6 0 .6-.4 1.2-.9 1.5-.5.3-1.3.4-2.4 0-2.1-.7-4.2-2.7-5-4.8-.4-1.1-.3-1.9.1-2.6Z"/>`,
    email: `<path d="M5 8.2c0-.9.7-1.6 1.6-1.6h10.8c.9 0 1.6.7 1.6 1.6v7.6c0 .9-.7 1.6-1.6 1.6H6.6c-.9 0-1.6-.7-1.6-1.6V8.2Z"/><path d="m6 8 6 4.5L18 8"/>`,
    area: `<path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z"/><path d="M12 13.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z"/>`,
    office: `<path d="M6 20V6.8c0-.8.6-1.4 1.4-1.4h6.2c.8 0 1.4.6 1.4 1.4V20"/><path d="M15 10h2.8c.7 0 1.2.5 1.2 1.2V20"/><path d="M8.5 8.5h3.8M8.5 11.5h3.8M8.5 14.5h3.8M4.8 20h14.4"/>`,
    registered: `<path d="M8.5 4.8h7L19.2 8v10.2c0 .8-.6 1.4-1.4 1.4H6.2c-.8 0-1.4-.6-1.4-1.4v-12c0-.8.6-1.4 1.4-1.4h2.3Z"/><path d="M14.8 4.9V8h3.6M8.2 12.2h7.6M8.2 15.2h5.2"/>`,
    arrowLeft: `<path d="M15 6 9 12l6 6"/><path d="M9.8 12H20"/>`,
    arrowRight: `<path d="m9 6 6 6-6 6"/><path d="M4 12h10.2"/>`
  };

  return `<span class="glyph-icon glyph-${name}" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false">${paths[name] || paths.area}</svg></span>`;
}

function iconLabel(iconName, i18nKey) {
  return `<span class="contact-label">${glyph(iconName)}<span data-i18n="${i18nKey}">${t(i18nKey)}</span></span>`;
}

function socialIcon(name) {
  const icons = {
    youtube: `<svg viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path d="M21 8.2s-.2-1.5-.8-2.1c-.8-.8-1.6-.8-2-.9C15.4 5 12 5 12 5s-3.4 0-6.2.2c-.4.1-1.3.1-2 .9C3.2 6.7 3 8.2 3 8.2S2.8 9.9 2.8 11.6v1.6c0 1.7.2 3.4.2 3.4s.2 1.5.8 2.1c.8.8 1.8.8 2.3.9 1.7.2 5.9.2 5.9.2s3.4 0 6.2-.2c.4-.1 1.3-.1 2-.9.6-.6.8-2.1.8-2.1s.2-1.7.2-3.4v-1.6c0-1.7-.2-3.4-.2-3.4Z"/><path d="m10.2 9.2 5.2 3.2-5.2 3.2V9.2Z" class="social-cutout"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" focusable="false" aria-hidden="true"><rect x="5" y="5" width="14" height="14" rx="4"/><circle cx="12" cy="12" r="3.2"/><circle cx="16.5" cy="7.7" r=".8"/></svg>`,
    facebook: `<svg viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path d="M14 8.2h2.2V5.1c-.4-.1-1.7-.2-3.2-.2-3.1 0-5.2 1.9-5.2 5.4v3H4.5v3.5h3.3V24h4v-7.2h3.2l.5-3.5h-3.7v-2.7c0-1 .3-2.4 2.2-2.4Z"/></svg>`,
    whatsappChannel: `<svg viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path d="M7.7 20.4 8.6 17A7.3 7.3 0 1 1 12 19.3l-4.3 1.1Z"/><path d="M10.3 8.8c.2-.5.4-.6.7-.6h.5c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.5.6c-.1.1-.2.3 0 .5.6 1 1.4 1.8 2.4 2.3.2.1.4.1.5-.1l.7-.8c.2-.2.4-.2.7-.1l1.7.8c.3.1.4.3.4.6 0 .6-.4 1.2-.9 1.5-.5.3-1.4.4-2.5 0-2.2-.7-4.3-2.9-5.1-5-.4-1.1-.3-1.9-.1-2.6Z" class="social-cutout"/></svg>`
  };
  return icons[name] || icons.youtube;
}

function mapActionIcon(name) {
  const icons = {
    open: `<svg viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path d="M7 8.2v8.8h8.8"/><path d="M9 17h8V9"/><path d="M12.2 6.8H18v5.8"/><path d="m11.2 12.8 6.4-6.4"/></svg>`,
    directions: `<svg viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path d="M12 3.5 20.5 12 12 20.5 3.5 12 12 3.5Z"/><path d="M9 15v-4h5.2"/><path d="m12.7 8.3 3.1 3.1-3.1 3.1"/></svg>`
  };
  return icons[name] || icons.directions;
}

function themeIcon() {
  return activeTheme === "light"
    ? `<span class="theme-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="4.2"></circle><path d="M12 2.8v2.3M12 18.9v2.3M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2.8 12h2.3M18.9 12h2.3M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6"></path></svg></span>`
    : `<span class="theme-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M20.2 14.6A8.2 8.2 0 0 1 9.4 3.8 8.8 8.8 0 1 0 20.2 14.6Z"></path></svg></span>`;
}

function languageIcon() {
  const nextLabel = activeLanguage === "en" ? "OD" : "EN";
  return `<span class="language-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M4.6 5.4h8.6c.9 0 1.6.7 1.6 1.6v6.2c0 .9-.7 1.6-1.6 1.6H8.9l-3.2 3v-3H4.6c-.9 0-1.6-.7-1.6-1.6V7c0-.9.7-1.6 1.6-1.6Z"/><path d="M11 9H6M8.5 7.4V9M6.8 12.2c1.6-.8 2.8-2 3.3-3.2"/><path d="M11.4 18.6h3.7l3.2 2.8v-2.8h1.1c.9 0 1.6-.7 1.6-1.6v-6.2c0-.9-.7-1.6-1.6-1.6h-2.3"/><path d="M14.7 15.4l1.5-3.5 1.5 3.5M15.2 14.3h2"/></svg></span><span class="language-code">${nextLabel}</span>`;
}

function processIcon(index) {
  const icons = [
    `<path d="M5.5 6.5h13v8h-8l-4.5 3v-3h-.5v-8Z"/><path d="M8 9h7M8 12h4"/>`,
    `<path d="M5 5.5h14v13H5z"/><path d="M8 9h8M8 12h5M8 15h7"/>`,
    `<path d="M5 12.5 9.2 17 19 7"/><path d="M6.5 6.5h8"/>`,
    `<path d="M7 8V4.8h10V8"/><path d="M6 17.5h12V20H6z"/><path d="M5 8h14v7H5z"/><path d="M8 11h8"/>`,
    `<path d="M4.5 8h10v8h-10z"/><path d="M14.5 11h3l2 2.5V16h-5z"/><path d="M7 18a1.7 1.7 0 1 0 0-3.4A1.7 1.7 0 0 0 7 18ZM17 18a1.7 1.7 0 1 0 0-3.4A1.7 1.7 0 0 0 17 18Z"/>`
  ];
  return `<span class="process-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false">${icons[index] || icons[0]}</svg></span>`;
}

function whyIcon(index) {
  const icons = [
    `<path d="M4 13.5h5l-1.2 5.2L20 8.8h-5l1.3-5.5L4 13.5Z"/>`,
    `<path d="M12 4v16"/><path d="M8.5 7.5h5a2.3 2.3 0 0 1 0 4.6h-3a2.3 2.3 0 0 0 0 4.6H16"/>`,
    `<path d="M12 3.8 14.5 9l5.7.8-4.1 4 1 5.6-5.1-2.7-5.1 2.7 1-5.6-4.1-4 5.7-.8L12 3.8Z"/>`,
    `<path d="M5 12.5 9.2 17 19 7"/><path d="M4.8 5.8h14.4v12.4H4.8z"/>`,
    `<path d="M5 6.5h14v11H5z"/><path d="M8 10h8M8 13.5h5"/><path d="M16.5 17.5 20 21"/>`,
    `<path d="M6 19V7l6-3 6 3v12"/><path d="M9 19v-7h6v7"/><path d="M4 19h16"/>`
  ];
  return `<span class="why-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false">${icons[index] || icons[0]}</svg></span>`;
}

function introMarkup() {
  return `
    <div class="intro-3d intro-minimal" data-intro-3d aria-label="Chacha G Graphics logo intro">
      <div class="intro-logo-stage">
        <div class="intro-logo-orbit" aria-hidden="true"></div>
        <img class="intro-logo-fallback" src="${logoForTheme()}" alt="Chacha G Graphics logo">
      </div>
    </div>
  `;
}

function motionLayers(paths, className, version) {
  return paths.map((path, index) => `
    <div class="${className} motion-layer ${index === 0 ? "is-active" : ""}" style="background-image:url('${asset(path)}?v=${version}')" aria-hidden="true"></div>
  `).join("");
}

function header(backToIndex = false) {
  const isGalleryPage = document.body.dataset.page === "gallery-admin";
  const brandHref = isGalleryPage ? OPTION_5_ROUTE : "#top";
  const sectionHref = (hash) => isGalleryPage ? `${OPTION_5_ROUTE}${hash}` : hash;
  return `
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header">
      <nav class="container nav" aria-label="Primary navigation">
        <a class="brand" href="${brandHref}" aria-label="Chacha G Graphics">
          <img data-brand-logo src="${logoForTheme()}" alt="Chacha G Graphics logo" width="154" height="56">
        </a>
        <div class="nav-links">
          <a href="${sectionHref("#about")}" data-i18n="about">${t("about")}</a>
          <a href="${sectionHref("#services")}" data-i18n="services">${t("services")}</a>
          <a href="${sectionHref("#trusted")}" data-i18n="trusted">${t("trusted")}</a>
          <a href="${GALLERY_ROUTE}" data-i18n="gallery" ${isGalleryPage ? "aria-current=\"page\"" : ""}>${t("gallery")}</a>
          <a href="${sectionHref("#reviews")}" data-i18n="reviews">${t("reviews")}</a>
          <a href="${sectionHref("#process")}" data-i18n="process">${t("process")}</a>
          <a href="${sectionHref("#contact")}" data-i18n="contact">${t("contact")}</a>
          <button class="nav-control icon-toggle" type="button" data-theme-toggle aria-label="Toggle theme">${themeIcon()}</button>
          <button class="nav-control lang-toggle" type="button" data-lang-toggle aria-label="Toggle language">${languageIcon()}</button>
          <button class="nav-control nav-burger" type="button" data-nav-burger aria-label="Open navigation" aria-expanded="false">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
              <line x1="3" y1="5" x2="17" y2="5"/><line x1="3" y1="10" x2="17" y2="10"/><line x1="3" y1="15" x2="17" y2="15"/>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  `;
}

function heroReveal(c) {
  const afterImg = asset("chachag-after.webp");
  const beforeImg = asset("chachag-before.webp");
  return `
    <section class="hero hero-video hero-reveal" style="--hero-image:url('${asset(c.image)}')" id="top">
      ${c.motionBg ? `
        <!-- Replace this generated animated background with final MP4/WebM footage when available. -->
        ${motionLayers(c.motionPlaylist || [c.motionBg], "generated-video-bg", "playlist1")}
      ` : ""}
      <div class="container hero-grid">
        <div class="hero-copy reveal">
          <span class="hero-status"><i class="hero-status-dot" aria-hidden="true"></i>${l("Signage Studio")} · ${l("Choudwar, Odisha")}</span>
          <p class="eyebrow">${c.eyebrow}</p>
          <h1 class="hero-neon"><span data-i18n="headline">${activeLanguage === "en" ? c.headline : t("headline")}</span></h1>
          <p class="hero-text" data-i18n="heroText">${t("heroText")}</p>
          <div class="hero-actions">
            <a class="btn btn-whatsapp" href="${WA}" target="_blank" rel="noopener" data-i18n="quote">${glyph("whatsapp")}<span data-i18n="quote">${t("quote")}</span></a>
            <a class="btn" href="#work" data-i18n="work">${t("work")}</a>
            <a class="btn btn-primary" href="tel:${PHONE_PRIMARY}" data-i18n="call">${glyph("phone")}<span data-i18n="call">${t("call")}</span></a>
          </div>
          <div class="hero-trust">
            <span class="hero-stars" aria-label="5 star rated">★★★★★</span>
            <span>${l("Trusted by 13+ brands across Odisha")}</span>
          </div>
          <div class="stats-strip">
            <div class="stat"><strong>14+</strong><span data-i18n="core">${t("core")}</span></div>
            <div class="stat"><strong>5</strong><span data-i18n="steps">${t("steps")}</span></div>
            <div class="stat"><strong>13+</strong><span>${t("trustedClients")}</span></div>
          </div>
        </div>
        <div class="hero-stage-wrap reveal">
          <div class="ba-reveal" data-ba-reveal style="--pos:50">
            <div class="ba-pane ba-after" style="background-image:url('${afterImg}')">
              <span class="ba-tag ba-tag-after">${l("After")}</span>
            </div>
            <div class="ba-pane ba-before" style="background-image:url('${beforeImg}')">
              <span class="ba-tag ba-tag-before">${l("Before")}</span>
            </div>
            <div class="ba-divider" aria-hidden="true">
              <span class="ba-knob">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16243c" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 7 4 12l5 5M15 7l5 5-5 5"/></svg>
              </span>
            </div>
            <input type="range" class="ba-range" min="0" max="100" value="50" data-ba-range aria-label="Drag to reveal before and after branding">
          </div>
          <p class="ba-hint">${glyph("arrowLeft")}<span>${l("Drag to see the transformation")}</span>${glyph("arrowRight")}</p>
        </div>
      </div>
    </section>
  `;
}

function hero(c) {
  return heroReveal(c);
}

function signatureSection(c) {
  const storyboardPanels = [
    {
      title: "Office Branding Film",
      tag: "Wallpaper / One-way vision / Name plates",
      image: "chachag-videos/office-branding-poster.webp"
    },
    {
      title: "In-Shop Branding Film",
      tag: "Glow boards / ACP LED / Posters",
      image: "chachag-videos/inshop-branding-poster.webp"
    },
    {
      title: "Safety Signage Film",
      tag: "Reflective / Direction / Warning signs",
      image: "chachag-videos/road-safety-poster.webp"
    }
  ];
  return `
    <section class="section signature signature-video">
      <div class="container video-storyboard reveal">
        <div>
          <p class="eyebrow">Background Video Concept</p>
          <h2>${c.title}</h2>
          <p>${c.intro}</p>
        </div>
        <div class="video-panels" aria-label="Cinematic storyboard panels">
          ${storyboardPanels.map((panel) => `
            <article class="video-panel" style="--panel-image: url('${asset(panel.image)}')">
              <img src="${asset(panel.image)}" alt="${panel.title}" loading="lazy" decoding="async">
              <span>${panel.tag}</span>
              <strong>${panel.title}</strong>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function about(c) {
  return `
    <section class="section" id="about">
      <div class="container split">
        <div class="section-head reveal">
          <p class="eyebrow">Company Profile</p>
          <h2 data-i18n="aboutTitle">${t("aboutTitle")}</h2>
          <p data-i18n="about1">${t("about1")}</p>
          <p data-i18n="about2">${t("about2")}</p>
        </div>
        <div class="media-stack reveal" aria-label="Branding and printing visuals">
          <figure><img src="${asset("optimized/portfolio/service-gsb.webp")}" alt="Glow sign board storefront" loading="lazy" decoding="async"></figure>
          <figure><img src="${asset("optimized/portfolio/service-wallpaper.webp")}" alt="Wallpaper printing visual" loading="lazy" decoding="async"></figure>
          <figure><img src="${asset("optimized/portfolio/stationery-mockup.webp")}" alt="Business branding print mockup" loading="lazy" decoding="async"></figure>
        </div>
      </div>
    </section>
  `;
}

function serviceSection() {
  return `
    <section class="section services-cinematic" id="services">
      <div class="container">
        <div class="section-head center reveal">
          <p class="eyebrow">${l("Services")}</p>
          <h2>${l("Built for visibility. Finished with care.")}</h2>
          <p>${l("Every board carries a name. Every name carries trust.")}</p>
        </div>
        <div class="service-grid service-hover-grid" data-service-hover>
          ${services.map(([name, text, img], index) => `
            <article class="service-card reveal" tabindex="0" style="--delay:${index * 42}ms">
              <div class="service-visual"><img src="${asset(img)}" alt="${l(name)} visual" loading="lazy"></div>
              <h3>${l(name)}</h3>
              <p>${l(text)}</p>
              <span class="service-action">${l("Explore service")}</span>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function portfolioSection() {
  const filters = ["All", "Banner", "Signage", "Cards", "Event", "Branding", "Glow Sign Board", "Nonlit Board", "Premium Business Cards", "Safety Signages", "Lable Cutting"];
  return `
    <section class="section portfolio-action" id="work">
      <div class="container">
        <div class="section-head reveal">
          <p class="eyebrow">${l("Portfolio / Our Work")}</p>
          <h2>${l("Realistic signage, printing and branding previews")}</h2>
          <p>${l("A look at the kind of work we deliver — shop boards, LED and glow sign boards, flex banners, wallpaper, vinyl and print materials, built to stand out and last.")}</p>
        </div>
        <div class="portfolio-filter reveal" aria-label="Portfolio category filters">
          ${filters.map((filter, index) => `<button class="filter-tab ${index === 0 ? "is-active" : ""}" type="button" data-filter="${filter}">${l(filter)}</button>`).join("")}
        </div>
        <div class="work-grid action-work-grid" data-portfolio-grid>
          ${portfolio.map(([name, img, category, text, tags = [category]], index) => `
            <figure class="work-card reveal" data-category="${category}" data-tags="${[category, ...tags].join("|")}" style="--delay:${index * 52}ms">
              <img src="${asset(img)}" alt="${l(name)} portfolio image" loading="lazy">
              <figcaption>
                <span class="work-category">${l(category)}</span>
                <strong>${l(name)}</strong>
                <em>${l(text)}</em>
                <a class="work-cta" href="${WA}" target="_blank" rel="noopener">${l("Get similar design")}</a>
              </figcaption>
            </figure>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function requirementsSection() {
  const items = [
    ["Government & Tender Work", "Clear output for formal requirements."],
    ["Business Branding", "Names that look ready for the market."],
    ["Safety & Compliance", "Signs people can notice and follow."],
    ["Procurement Supply", "Simple coordination under one roof."],
    ["Retail & Commercial Visibility", "More presence where customers look."],
    ["Marketing Campaigns", "Prints that carry the message clearly."]
  ];

  return `
    <section class="section" id="requirements">
      <div class="container">
        <div class="section-head reveal">
          <p class="eyebrow">${l("Requirements")}</p>
          <h2>${l("Made for real-world work")}</h2>
          <p>${l("From small business signs to institutional needs, Chacha G Graphics helps Odisha brands stand clearly.")}</p>
        </div>
        <div class="requirements-grid">
          ${items.map(([title, text]) => `<article class="requirement-card reveal"><h3>${l(title)}</h3><p>${l(text)}</p></article>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function trustedSection() {
  return `
    <section class="section" id="trusted">
      <div class="container">
        <div class="section-head center reveal">
          <p class="eyebrow">${l("Associations")}</p>
          <h2>${l("Brand visibility created for serious names")}</h2>
          <p>${l("Selected names that reflect the kind of professional signage, print and branding work we are prepared to deliver.")}</p>
        </div>
        <div class="client-marquee reveal" aria-label="Trusted by client logos">
          <div class="client-track">
            ${clients.map(([name, img, bg]) => `
              <span class="client-pill"${bg ? ` style="--client-bg:${bg}"` : ""}>
                <img src="${asset(img)}" alt="${name} logo" loading="lazy" decoding="async" width="300" height="220">
              </span>
            `).join("")}
            ${clients.map(([name, img, bg]) => `
              <span class="client-pill" aria-hidden="true"${bg ? ` style="--client-bg:${bg}"` : ""}>
                <img src="${asset(img)}" alt="" loading="lazy" decoding="async" width="300" height="220">
              </span>
            `).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function reviewsVideoSection() {
  const rollingReviewCards = [...googleReviewCards, ...googleReviewCards];

  return `
    <section class="section" id="reviews">
      <div class="container split review-video">
        <div class="section-head reveal">
          <p class="eyebrow">${l("Reviews & Video")}</p>
          <h2>${l("Public proof, live work glimpses and real project confidence")}</h2>
          <p>${l("See what customers say on our verified Google Business Profile, watch real project clips on YouTube, or message us directly to start your own.")}</p>
          <div class="section-actions">
          <a class="btn" href="${MAP_LINK}" target="_blank" rel="noopener">${l("Open Google Profile")}</a>
            <a class="btn btn-review" href="${GOOGLE_REVIEW_LINK}" target="_blank" rel="noopener">${l("Leave Google Review")}</a>
            <a class="btn" href="${YOUTUBE_LINK}" target="_blank" rel="noopener">${l("Visit YouTube Channel")}</a>
          </div>
        </div>
        <div class="review-carousel reveal" data-review-carousel>
          <div class="review-carousel-head">
            <div>
              <strong>${l("Google Reviews")}</strong>
              <span>${l("4.9 ★ average · 66 reviews")}</span>
            </div>
          </div>
          <div class="review-marquee" tabindex="0" aria-label="Rolling Google review cards">
            <div class="review-track" data-review-track>
              ${rollingReviewCards.map((card, index) => `
              <article class="review-card${card.isPlaceholder ? " review-card-placeholder" : ""}" ${index >= googleReviewCards.length ? "aria-hidden=\"true\"" : ""}>
                <div class="review-card-top">
                  ${reviewAvatar(card.title, index)}
                  <div>
                    <div class="review-badge">Google</div>
                    <strong class="review-author">${card.title}</strong>
                    <span class="review-meta">${card.meta}</span>
                  </div>
                </div>
                <p class="review-quote">${card.text}</p>
                <a class="review-link" href="${card.href}" target="_blank" rel="noopener">${card.action}</a>
              </article>
            `).join("")}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function processSection() {
  return `
    <section class="section" id="process">
      <div class="container">
        <div class="section-head center reveal">
          <p class="eyebrow">${l("Simple Working Process")}</p>
          <h2>${l("WhatsApp-first coordination from requirement to handover")}</h2>
          <p>${l("Share your requirement, references and sizes directly. We guide you with design, material and pricing.")}</p>
        </div>
        <div class="steps process-flow reveal">
          ${steps.map((text, index) => `
            <article class="step-card process-step">
              ${processIcon(index)}
              <span class="step-index">${String(index + 1).padStart(2, "0")}</span>
              <h3>${l(text)}</h3>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function whySection() {
  return `
    <section class="section" id="why">
      <div class="container">
        <div class="section-head reveal">
          <p class="eyebrow">${l("Why Choose Us")}</p>
          <h2>${l("Why people work with us")}</h2>
        </div>
        <div class="why-grid why-hover-grid" data-why-hover>
          ${why.map(([title, text], index) => `<article class="why-card reveal" tabindex="0" style="--delay:${index * 55}ms">${whyIcon(index)}<strong>${l(title)}</strong><span>${l(text)}</span></article>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function conceptExtra(c) {
  if (c.extra === "office") {
    return `
      <section class="section suite-section" id="solution-suites">
        <div class="container">
          <div class="section-head center reveal">
            <p class="eyebrow">${l("Branding Solution Suites")}</p>
            <h2>${l("One studio for safety signs, office branding and inshop visibility")}</h2>
            <p>${l("Move through three focused service worlds built for workplaces, offices and retail spaces.")}</p>
          </div>
          <div class="suite-track reveal" data-suite-hover>
            ${[
              {
                eyebrow: "Industrial And Road Safety",
                title: "Reflective signs, caution boards, direction boards and factory safety visuals",
                text: "Built for locations where information must be visible, durable and understood quickly by workers, visitors and traffic.",
                images: [
                  ["optimized/portfolio/industrial-safety-signages.webp", "Industrial Safety Signages", "Warning, caution and mandatory instruction boards.", "Industrial safety signage"],
                  ["optimized/portfolio/service-traffic.webp", "Road Safety Boards", "Reflective direction, traffic and work-zone signage.", "Road safety direction boards"],
                  ["optimized/portfolio/service-safety.webp", "Safety Posters", "Do's, don'ts, emergency and compliance information.", "Workplace safety posters"]
                ]
              },
              {
                eyebrow: "Office Branding Suite",
                title: "Reception wall, wallpaper, glass vinyl and stationery in one visual system",
                text: "This option is best if Chacha G Graphics wants to attract offices, clinics, coaching centers, showrooms and corporate interiors.",
                images: [
                  ["optimized/portfolio/service-wallpaper.webp", "Wallpaper Branding", "Large wall visuals for reception and office interiors.", "Office wallpaper branding"],
                  ["optimized/portfolio/service-one-way-vision.webp", "Glass Vinyl", "One-way vision, frosted vinyl and privacy graphics.", "Glass vinyl branding"],
                  ["optimized/portfolio/stationery-mockup.webp", "Stationery Set", "Business cards, letterheads and tabletop identity.", "Corporate printing mockup"]
                ]
              },
              {
                eyebrow: "Inshop Branding",
                title: "Glow boards, ACP LED boards, sunboard walls, posters and retail display systems",
                text: "Designed for shops and showrooms that need instant visibility, clean product communication and strong walk-in appeal.",
                images: [
                  ["optimized/portfolio/generated-glow-sign-board.webp", "Glow Sign Board", "Illuminated front identity for night visibility.", "Glow sign board storefront"],
                  ["optimized/portfolio/generated-sunboard-branding.webp", "Sunboard Branding", "Fashion, shoes and retail wall branding panels.", "Sunboard retail branding"],
                  ["optimized/portfolio/service-posters-flyers.webp", "Posters And Leaflets", "Offer posters, counter visuals and campaign prints.", "Retail advertising posters"]
                ]
              },
              {
                eyebrow: "Print And Finishing Suite",
                title: "Digital paper print, brochures, booklets, catalogues, frames, invitation cards and label cutting",
                text: "A complete print finishing suite for certificates, photo frames, invitations, catalogues, brochures, booklets and precision label cutting.",
                images: [
                  ["optimized/portfolio/service-posters-flyers.webp", "Digital Paper Print", "Brochures, booklets, catalogues, flyers and marketing prints.", "Digital paper print samples"],
                  ["optimized/portfolio/generated-wedding-banner.webp", "Invitation Cards And Frames", "Invitations, photo frames and certificate framing work.", "Invitation card and framing work"],
                  ["optimized/portfolio/service-shapecut-stickers.webp", "Label Cutting", "Clean contour-cut labels, stickers and product branding cuts.", "Label cutting stickers"]
                ]
              }
            ].map((suite, index) => `
              <article class="suite-card" tabindex="0" style="--suite-delay:${index * 170}ms">
                <div class="suite-copy">
                  <span class="suite-count">0${index + 1}</span>
                  <p class="eyebrow">${l(suite.eyebrow)}</p>
                  <h3>${l(suite.title)}</h3>
                  <p>${l(suite.text)}</p>
                </div>
                <div class="suite-media">
                  ${suite.images.map(([src, title, text, alt]) => `
                    <figure>
                      <img src="${asset(src)}" alt="${alt}" loading="lazy">
                      <figcaption><strong>${l(title)}</strong><span>${l(text)}</span></figcaption>
                    </figure>
                  `).join("")}
                </div>
              </article>
            `).join("")}
          </div>
        </div>
      </section>
    `;
  }

  return "";
}

function footer() {
  return `
    <footer class="site-footer" id="contact">
      <div class="container">
        <div class="footer-profile">
          <div class="footer-left">
            <div class="footer-brand-line">
              <img data-brand-logo src="${logoForTheme()}" alt="Chacha G Graphics logo">
            </div>
            <p class="footer-intro">${l("Professional signage, printing and branding studio in Choudwar. We create flex banners, shop boards, glow sign boards, LED boards, vinyl, wallpaper, visiting cards and complete brand visibility solutions.")}</p>
            <div class="footer-contact">
              <article>${iconLabel("email", "emailLabel")}<a href="mailto:chachaggraphics@gmail.com">chachaggraphics@gmail.com</a></article>
              <article>${iconLabel("phone", "phoneLabel")}<a href="tel:${PHONE_PRIMARY}">7978017115</a><a href="tel:${PHONE_SECONDARY}">7539814620</a></article>
              <article class="footer-address">${iconLabel("office", "officeAddressLabel")}<p>${l("Near Aahar Kendra, Gandhi Chhak, Choudwar, Odisha, India - 754071")}</p></article>
              <article>${iconLabel("whatsapp", "whatsappLabel")}<a href="${WA}" target="_blank" rel="noopener">9861095786</a></article>
            </div>
            <div class="section-actions footer-actions">
              <a class="btn btn-whatsapp" href="${WA}" target="_blank" rel="noopener" aria-label="Message Chacha G Graphics on WhatsApp">${glyph("whatsapp")}<span data-i18n="quote">${t("quote")}</span></a>
              <a class="btn" href="tel:${PHONE_PRIMARY}" aria-label="Call Chacha G Graphics">${glyph("phone")}<span data-i18n="call">${t("call")}</span></a>
            </div>
          </div>
          <div class="footer-map cinematic-map-card reveal" data-map-card>
            <div class="map-frame-wrap">
              <div class="map-static-fallback" aria-hidden="true">
                <strong>Chacha G Graphics</strong>
                <small>Gandhi Chhak, Choudwar</small>
              </div>
              <iframe
                title="Chacha G Graphics location map"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                src="${MAP_EMBED}"
              ></iframe>
              <div class="map-logo-marker" aria-hidden="true">
                <img src="${asset("chacha-g-logo-black.svg")}" alt="">
              </div>
              <aside class="map-business-card" aria-label="Chacha G Graphics map details">
                <div>
                  <strong>Chacha G Graphics</strong>
                  <span>${l("Near Aahar Kendra, Gandhi Chhak, Choudwar, Odisha, India - 754071")}</span>
                  <small><a href="tel:${PHONE_PRIMARY}">${l("Call 7978017115")}</a> / <a href="${WA}" target="_blank" rel="noopener">${l("WhatsApp 9861095786")}</a></small>
                </div>
                <div class="map-card-actions">
                  <a href="${MAP_LINK}" target="_blank" rel="noopener" aria-label="Open Chacha G Graphics on Google Maps">${mapActionIcon("open")}</a>
                  <a href="${MAP_DIRECTIONS_LINK}" target="_blank" rel="noopener" aria-label="Get directions to Chacha G Graphics">${mapActionIcon("directions")}</a>
                </div>
              </aside>
            </div>
          </div>
          <div class="footer-bottom-line">
            <span>${l("© 2026 Chacha G Graphics. All Rights Reserved.")}</span>
            <div class="footer-social" aria-label="Social links">
              <a href="${YOUTUBE_LINK}" target="_blank" rel="noopener" aria-label="YouTube">${socialIcon("youtube")}</a>
              <a href="${INSTAGRAM_LINK}" target="_blank" rel="noopener" aria-label="Instagram">${socialIcon("instagram")}</a>
              <a href="${FACEBOOK_LINK}" target="_blank" rel="noopener" aria-label="Facebook">${socialIcon("facebook")}</a>
              <a href="${WHATSAPP_CHANNEL_LINK}" target="_blank" rel="noopener" aria-label="WhatsApp Channel">${socialIcon("whatsappChannel")}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function galleryAdminPage() {
  return `
    ${MOTION_BACKGROUNDS.map((path, index) => `
      <div class="site-video-backdrop motion-layer ${index === 0 ? "is-active" : ""}" style="background-image:url('${asset(path)}?v=gallery1')" aria-hidden="true"></div>
    `).join("")}
    ${header(true)}
    <main id="main" class="gallery-admin-main">
      <section class="gallery-admin-hero section">
        <div class="container gallery-admin-layout">
          <div class="gallery-admin-copy reveal">
            <p class="eyebrow">${l("Gallery")}</p>
            <h1>Work photo gallery</h1>
            <p>Finished work photos and videos are detected directly from the local gallery folder on refresh.</p>
            <div class="gallery-admin-stats">
              <span><strong data-gallery-count>...</strong> media files</span>
              <span><strong>JPG PNG WEBP MP4</strong> formats</span>
              <span><strong>Auto</strong> after refresh</span>
            </div>
          </div>
          <div class="gallery-upload-card gallery-folder-card reveal">
            <strong>Gallery source folder</strong>
            <code>C:\\Users\\Design 2\\Documents\\New project\\assets\\chachag-gallery\\</code>
            <p>Photos and videos can keep their camera filenames. Add or remove files here, then refresh this page.</p>
          </div>
        </div>
      </section>
      <section class="section gallery-live-section">
        <div class="container">
          <div class="section-head">
            <p class="eyebrow">${l("Gallery")}</p>
            <h2>Live work gallery</h2>
            <p>Real photos and videos from the local Chacha G gallery folder.</p>
          </div>
          <div class="manual-gallery-grid static-gallery-grid" data-static-gallery>
          </div>
          <div class="gallery-empty-state reveal" data-gallery-status>
            <strong>Detecting gallery folder.</strong>
            <span>Reading photos and videos from the local folder...</span>
          </div>
        </div>
      </section>
    </main>
  `;
}

function getStoredGalleryItems() {
  try {
    return JSON.parse(readLocalFlag(GALLERY_STORAGE_KEY, "[]"));
  } catch (error) {
    return [];
  }
}

function setStoredGalleryItems(items) {
  writeLocalFlag(GALLERY_STORAGE_KEY, JSON.stringify(items));
}

function escapeHtml(value) {
  return String(value || "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  })[char]);
}

function galleryMediaType(file) {
  return /\.(mp4|webm|mov)$/i.test(file) ? "Video" : "Photo";
}

function isGalleryMediaFile(file) {
  return /\.(jpe?g|png|webp|gif|mp4|webm|mov)$/i.test(file);
}

function uniqueGalleryFiles(files) {
  return [...new Set(files)]
    .filter((file) => file && !file.includes("/") && isGalleryMediaFile(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));
}

async function detectGalleryMediaFiles() {
  try {
    const response = await fetch(asset(GALLERY_FOLDER), { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Gallery folder request failed: ${response.status}`);
    }
    const html = await response.text();
    const doc = new DOMParser().parseFromString(html, "text/html");
    const files = Array.from(doc.querySelectorAll("a[href]"))
      .map((link) => {
        const href = link.getAttribute("href") || "";
        const cleanHref = href.split("?")[0].split("#")[0].replace(/\/$/, "");
        return decodeURIComponent(cleanHref.split("/").pop() || "");
      });
    const media = uniqueGalleryFiles(files);
    return media.length ? media : GALLERY_FALLBACK_MEDIA;
  } catch (error) {
    console.warn("Using fallback gallery media list.", error);
    return GALLERY_FALLBACK_MEDIA;
  }
}

function galleryMediaTitle(file) {
  const match = file.match(/^(\d{4})(\d{2})(\d{2})_(\d{2})(\d{2})/);
  if (!match) {
    return file.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ");
  }
  const [, year, month, day] = match;
  return `${day}-${month}-${year} work`;
}

function galleryMediaMarkup(file, index) {
  const type = galleryMediaType(file);
  const source = asset(`chachag-gallery/${file}`);
  const media = type === "Video"
    ? `<video src="${source}" muted loop playsinline preload="none"></video>`
    : `<img src="${source}" alt="Chacha G Graphics work photo ${index + 1}" loading="lazy" decoding="async">`;
  return `
    <figure class="manual-gallery-card static-media-card reveal ${type === "Video" ? "is-video" : "is-photo"}" aria-label="Chacha G Graphics ${type.toLowerCase()} ${index + 1}">
      ${media}
    </figure>
  `;
}

function initGalleryMediaEvents(scope = document) {
  scope.querySelectorAll(".static-media-card").forEach((card) => {
    if (card.dataset.mediaReady === "true") {
      return;
    }
    card.dataset.mediaReady = "true";
    const media = card.querySelector("img, video");
    const markLoaded = () => card.classList.add("is-loaded");
    const hideBroken = () => {
      card.hidden = true;
    };
    if (media) {
      media.addEventListener("load", markLoaded, { once: true });
      media.addEventListener("loadeddata", markLoaded, { once: true });
      media.addEventListener("error", hideBroken, { once: true });
      if (media.complete || media.readyState >= 2) {
        markLoaded();
      }
    }
    const video = card.querySelector("video");
    if (video) {
      card.addEventListener("mouseenter", () => video.play().catch(() => {}));
      card.addEventListener("mouseleave", () => video.pause());
      card.addEventListener("focusin", () => video.play().catch(() => {}));
      card.addEventListener("focusout", () => video.pause());
    }
  });
}

function initMapFrames(scope = document) {
  scope.querySelectorAll(".map-frame-wrap").forEach((wrap) => {
    if (wrap.dataset.mapReady === "true") {
      return;
    }
    wrap.dataset.mapReady = "true";
    const iframe = wrap.querySelector("iframe");
    if (!iframe) {
      return;
    }
    iframe.addEventListener("load", () => wrap.classList.add("is-map-loaded"), { once: true });
    iframe.addEventListener("error", () => wrap.classList.add("is-map-error"), { once: true });
    window.setTimeout(() => {
      if (!wrap.classList.contains("is-map-error")) {
        wrap.classList.add("is-map-loaded");
      }
    }, 1600);
  });
}

function renderStaticGallery(files) {
  const media = uniqueGalleryFiles(files);
  const grid = document.querySelector("[data-static-gallery]");
  const status = document.querySelector("[data-gallery-status]");
  const counters = document.querySelectorAll("[data-gallery-count]");
  if (!grid) {
    return;
  }
  counters.forEach((counter) => {
    counter.textContent = String(media.length);
  });
  grid.innerHTML = media.map(galleryMediaMarkup).join("");
  grid.querySelectorAll(".reveal").forEach((item) => item.classList.add("in"));
  initGalleryMediaEvents(grid);
  if (status) {
    status.innerHTML = media.length
      ? `<strong>Gallery auto-detected.</strong><span>Showing ${media.length} photos and videos from the local folder.</span>`
      : `<strong>No media found.</strong><span>Add JPG, PNG, WEBP, GIF, MP4, WEBM or MOV files to the gallery folder and refresh.</span>`;
  }
}

async function initStaticGallery() {
  renderStaticGallery(await detectGalleryMediaFiles());
}

function readGalleryFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function renderManualGallery(items) {
  const grid = document.querySelector("[data-manual-gallery]");
  const empty = document.querySelector("[data-gallery-empty]");
  const counters = document.querySelectorAll("[data-gallery-count]");
  if (!grid) {
    return;
  }
  counters.forEach((counter) => {
    counter.textContent = String(items.length);
  });
  if (empty) {
    empty.hidden = items.length > 0;
  }
  grid.innerHTML = items.map((item) => `
    <figure class="manual-gallery-card clean-gallery-card reveal" data-gallery-id="${item.id}" aria-label="${escapeHtml(item.title)}">
      <img src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy">
    </figure>
  `).join("");
  grid.querySelectorAll("[data-gallery-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextItems = getStoredGalleryItems().filter((item) => item.id !== button.dataset.galleryDelete);
      setStoredGalleryItems(nextItems);
      renderManualGallery(nextItems);
    });
  });
}

function initGalleryAdmin() {
  const form = document.querySelector("[data-gallery-form]");
  if (!form) {
    return;
  }
  renderManualGallery(getStoredGalleryItems());
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const photos = Array.from(form.elements.photos.files || []);
    if (!photos.length) {
      return;
    }
    const title = form.elements.title.value.trim();
    const category = form.elements.category.value;
    const note = form.elements.note.value.trim();
    const existing = getStoredGalleryItems();
    const additions = await Promise.all(photos.map(async (photo, index) => ({
      id: `${Date.now()}-${index}-${photo.name}`,
      title: title || photo.name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " "),
      category,
      note,
      image: await readGalleryFile(photo),
      createdAt: new Date().toISOString()
    })));
    const nextItems = [...additions, ...existing].slice(0, 60);
    setStoredGalleryItems(nextItems);
    renderManualGallery(nextItems);
    form.reset();
  });
  const clearButton = document.querySelector("[data-gallery-clear]");
  if (clearButton) {
    clearButton.addEventListener("click", () => {
      setStoredGalleryItems([]);
      renderManualGallery([]);
    });
  }
}

function renderGalleryAdmin() {
  document.title = "Gallery | Chacha G Graphics";
  document.documentElement.lang = activeLanguage === "or" ? "or" : "en";
  document.body.classList.add("cinematic", "has-site-video", "gallery-admin-page");
  document.body.classList.toggle("light-mode", activeTheme === "light");
  document.body.classList.toggle("lang-or", activeLanguage === "or");
  document.body.innerHTML = galleryAdminPage();
  initControls();
  initMotionPlaylist();
  initReveal();
  initGalleryAdmin();
  initStaticGallery();
}

function renderConcept() {
  const route = document.body.dataset.concept;
  const c = concepts[route] || concepts["chachag-option-5"];
  document.title = c.seoTitle || `${c.title} | Chacha G Graphics`;
  document.documentElement.lang = activeLanguage === "or" ? "or" : "en";
  document.body.classList.add(c.theme);
  document.body.classList.toggle("light-mode", activeTheme === "light");
  document.body.classList.toggle("lang-or", activeLanguage === "or");
  if (c.motionBg) {
    document.body.classList.add("has-site-video");
  }
  document.body.innerHTML = `
    ${introMarkup()}
    ${c.motionBg ? `
      ${motionLayers(c.motionPlaylist || [c.motionBg], "site-video-backdrop", "playlist1")}
    ` : ""}
    ${header(true)}
    <main id="main" data-site-shell>${hero(c)}${signatureSection(c)}${about(c)}${serviceSection()}${requirementsSection()}${trustedSection()}${portfolioSection()}${conceptExtra(c)}${processSection()}${whySection()}${reviewsVideoSection()}</main>
    ${footer()}
  `;
  initControls();
  initMotionPlaylist();
  initIntro();
  initReveal();
  ensureCriticalContentVisible();
  initMapFrames();
  initReviewCarousel();
  initRevealSlider();
  initSectionEffects();
  scrollToHashAfterRender();
}

function rerenderCurrentPage() {
  const hash = window.location.hash;
  if (document.body.dataset.page === "gallery-admin") {
    renderGalleryAdmin();
  } else {
    renderConcept();
  }
  if (hash) {
    window.setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ block: "start" });
    }, 0);
  }
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  items.forEach((item) => item.classList.add("in"));
  if (!("IntersectionObserver" in window)) {
    return;
  }
  try {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
        }
      });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    window.setTimeout(ensureCriticalContentVisible, 120);
  } catch (error) {
    items.forEach((item) => item.classList.add("in"));
  }
}

function ensureCriticalContentVisible() {
  document.querySelectorAll("#top .reveal").forEach((item) => {
    item.classList.add("in");
  });
  document.querySelectorAll(".reveal").forEach((item) => {
    const rect = item.getBoundingClientRect();
    const isOnScreen = rect.top < window.innerHeight * 0.95 && rect.bottom > -80;
    if (isOnScreen) {
      item.classList.add("in");
    }
  });
}

function scrollToHashAfterRender() {
  const hash = window.location.hash;
  if (!hash) {
    return;
  }
  const jump = () => {
    if (hash === "#top") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }
    const target = document.querySelector(hash);
    if (!target) {
      return;
    }
    const headerOffset = document.querySelector(".site-header")?.offsetHeight || 0;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset - 18;
    window.scrollTo({ top: Math.max(0, targetTop), left: 0, behavior: "auto" });
  };
  window.requestAnimationFrame(jump);
  window.setTimeout(jump, 80);
  window.setTimeout(jump, 220);
  window.setTimeout(jump, 520);
  window.setTimeout(jump, 1000);
  window.setTimeout(jump, 1800);
  window.setTimeout(jump, 2800);
}

function initControls() {
  window.ChachaGToggleTheme = () => {
    activeTheme = activeTheme === "light" ? "dark" : "light";
    writeLocalFlag("chachagTheme", activeTheme);
    document.body.classList.toggle("light-mode", activeTheme === "light");
    document.querySelectorAll("[data-brand-logo]").forEach((img) => {
      img.src = logoForTheme();
    });
    document.querySelector("[data-theme-toggle]").innerHTML = themeIcon();
  };

  window.ChachaGToggleLanguage = () => {
    activeLanguage = activeLanguage === "en" ? "or" : "en";
    writeLocalFlag("chachagLanguage", activeLanguage);
    rerenderCurrentPage();
  };

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.addEventListener("click", window.ChachaGToggleTheme);
  });
  document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
    button.addEventListener("click", window.ChachaGToggleLanguage);
  });

  const burger = document.querySelector("[data-nav-burger]");
  const navLinks = document.querySelector(".nav-links");
  if (burger && navLinks) {
    burger.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", String(isOpen));
      burger.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });
    document.addEventListener("click", (e) => {
      if (!burger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
        burger.setAttribute("aria-label", "Open navigation");
      }
    }, { capture: true });
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
        burger.setAttribute("aria-label", "Open navigation");
      });
    });
  }
}

function initRevealSlider(scope = document) {
  scope.querySelectorAll("[data-ba-reveal]").forEach((el) => {
    if (el.dataset.baReady === "true") {
      return;
    }
    el.dataset.baReady = "true";
    const range = el.querySelector("[data-ba-range]");
    if (!range) {
      return;
    }
    const apply = () => el.style.setProperty("--pos", range.value);
    range.addEventListener("input", apply);
    apply();
  });
}

function initReviewCarousel(scope = document) {
  scope.querySelectorAll("[data-review-carousel]").forEach((carousel) => {
    const track = carousel.querySelector("[data-review-track]");
    if (!track || carousel.dataset.reviewReady === "true") {
      return;
    }
    carousel.dataset.reviewReady = "true";
    const marquee = carousel.querySelector(".review-marquee");
    if (marquee) {
      const pause = () => {
        track.style.animationPlayState = "paused";
      };
      const play = () => {
        track.style.animationPlayState = "";
      };
      marquee.addEventListener("pointerenter", pause);
      marquee.addEventListener("pointerleave", play);
      marquee.addEventListener("focusin", pause);
      marquee.addEventListener("focusout", play);
    }
    const scrollByCard = (direction) => {
      const card = track.querySelector(".review-card");
      const amount = card ? card.getBoundingClientRect().width + 14 : track.clientWidth * 0.85;
      track.scrollBy({ left: direction * amount, behavior: "smooth" });
    };
    carousel.querySelectorAll("[data-review-scroll]").forEach((button) => {
      button.addEventListener("click", () => {
        scrollByCard(button.dataset.reviewScroll === "next" ? 1 : -1);
      });
    });
  });
}

function initMotionPlaylist() {
  const groups = [".generated-video-bg.motion-layer", ".site-video-backdrop.motion-layer"];
  let index = 0;
  const count = document.querySelectorAll(groups[0]).length;
  if (count < 2) {
    return;
  }
  window.clearInterval(window.ChachaGMotionTimer);
  window.ChachaGMotionTimer = window.setInterval(() => {
    index = (index + 1) % count;
    groups.forEach((selector) => {
      document.querySelectorAll(selector).forEach((layer, layerIndex) => {
        layer.classList.toggle("is-active", layerIndex === index);
      });
    });
  }, 15000);
}

function initIntro() {
  const intro = document.querySelector("[data-intro-3d]");
  if (!intro) {
    return;
  }

  const forceIntro = new URLSearchParams(window.location.search).get("intro") === "1";
  const alreadyPlayed = readSessionFlag("chachagIntroPlayed") === "true";
  if (alreadyPlayed && !forceIntro) {
    intro.remove();
    document.body.classList.remove("intro-lock");
    return;
  }

  document.body.classList.add("intro-lock");
  let closing = false;

  const closeIntro = () => {
    if (closing) {
      return;
    }
    closing = true;
    intro.classList.add("is-playing");
    window.setTimeout(() => {
      intro.classList.add("is-leaving");
      writeSessionFlag("chachagIntroPlayed", "true");
      document.body.classList.remove("intro-lock");
    }, 620);
    window.setTimeout(() => intro.remove(), 980);
  };

  window.setTimeout(closeIntro, 780);
  intro.addEventListener("click", closeIntro);
}

function readSessionFlag(key) {
  try {
    return window.sessionStorage?.getItem(key);
  } catch (error) {
    return null;
  }
}

function writeSessionFlag(key, value) {
  try {
    window.sessionStorage?.setItem(key, value);
  } catch (error) {
    // Session storage is only a convenience for the intro.
  }
}

function initSectionEffects() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.ChachaGFilterPortfolio = (filter, activeButton) => {
    const grid = document.querySelector("[data-portfolio-grid]");
    if (!grid) {
      return;
    }
    document.querySelectorAll("[data-filter]").forEach((item) => {
      item.classList.toggle("is-active", item === activeButton || item.dataset.filter === filter);
    });
    grid.querySelectorAll(".work-card").forEach((card) => {
      const tags = (card.dataset.tags || card.dataset.category || "").split("|");
      const visible = filter === "All" || tags.includes(filter);
      card.classList.toggle("is-filtered-out", !visible);
    });
  };

  document.querySelectorAll(".service-card, .why-card, .work-card, .cinematic-map-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      if (!reduced && (card.classList.contains("service-card") || card.classList.contains("why-card") || card.classList.contains("work-card"))) {
        const tilt = card.classList.contains("work-card") ? 5 : card.classList.contains("why-card") ? 7 : 10;
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * tilt;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * -tilt;
        card.style.setProperty("--tilt-x", `${y}deg`);
        card.style.setProperty("--tilt-y", `${x}deg`);
      }
    });
  });

  document.querySelectorAll("[data-service-hover]").forEach((grid) => {
    grid.querySelectorAll(".service-card").forEach((card) => {
      const activate = () => {
        grid.classList.add("has-active");
        card.classList.add("is-active");
      };
      const deactivate = () => {
        grid.classList.remove("has-active");
        card.classList.remove("is-active");
        card.style.removeProperty("--tilt-x");
        card.style.removeProperty("--tilt-y");
      };
      card.addEventListener("pointerenter", activate);
      card.addEventListener("pointerleave", deactivate);
      card.addEventListener("focus", activate);
      card.addEventListener("blur", deactivate);
    });
  });

  document.querySelectorAll("[data-why-hover]").forEach((grid) => {
    grid.querySelectorAll(".why-card").forEach((card) => {
      const activate = () => {
        grid.classList.add("has-active");
        card.classList.add("is-active");
      };
      const deactivate = () => {
        grid.classList.remove("has-active");
        card.classList.remove("is-active");
        card.style.removeProperty("--tilt-x");
        card.style.removeProperty("--tilt-y");
      };
      card.addEventListener("pointerenter", activate);
      card.addEventListener("pointerleave", deactivate);
      card.addEventListener("pointercancel", deactivate);
      card.addEventListener("lostpointercapture", deactivate);
      card.addEventListener("focus", activate);
      card.addEventListener("blur", deactivate);
    });
  });

  initMagneticSuiteCards(reduced);

  document.querySelectorAll("[data-portfolio-grid]").forEach((grid) => {
    const section = grid.closest(".portfolio-action");
    const tabs = grid.parentElement.querySelectorAll("[data-filter]");
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        window.ChachaGFilterPortfolio(tab.dataset.filter, tab);
      });
    });
    const clearPortfolioActionState = () => {
      grid.classList.remove("has-active");
      if (section) {
        section.classList.remove("is-portfolio-active");
        section.style.removeProperty("--portfolio-bg");
        section.style.removeProperty("--portfolio-x");
        section.style.removeProperty("--portfolio-y");
        section.style.removeProperty("--portfolio-shift");
      }
      grid.querySelectorAll(".work-card").forEach((item) => {
        item.classList.remove("is-active", "is-before", "is-after", "is-near");
        item.style.removeProperty("--tilt-x");
        item.style.removeProperty("--tilt-y");
      });
    };
    grid.querySelectorAll(".work-card").forEach((card, activeIndex) => {
      const activate = () => {
        grid.classList.add("has-active");
        if (section) {
          const image = card.querySelector("img");
          const rect = card.getBoundingClientRect();
          const sectionRect = section.getBoundingClientRect();
          if (image) {
            section.style.setProperty("--portfolio-bg", `url("${image.currentSrc || image.src}")`);
          }
          section.style.setProperty("--portfolio-x", `${rect.left + rect.width / 2 - sectionRect.left}px`);
          section.style.setProperty("--portfolio-y", `${rect.top + rect.height / 2 - sectionRect.top}px`);
          section.style.setProperty("--portfolio-shift", `${(activeIndex % 4 - 1.5) * 10}px`);
          section.classList.add("is-portfolio-active");
        }
        grid.querySelectorAll(".work-card").forEach((item, itemIndex) => {
          item.classList.toggle("is-active", item === card);
          item.classList.toggle("is-before", itemIndex < activeIndex);
          item.classList.toggle("is-after", itemIndex > activeIndex);
          item.classList.toggle("is-near", Math.abs(itemIndex - activeIndex) === 1);
        });
      };
      const deactivate = () => clearPortfolioActionState();
      card.addEventListener("pointerenter", activate);
      card.addEventListener("pointerleave", deactivate);
      card.addEventListener("focusin", activate);
      card.addEventListener("focusout", deactivate);
    });
  });
}

function initMagneticSuiteCards(reduced) {
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  // Magnetic glass tuning for Branding Solution Suites.
  const maxTilt = 8.5;
  const magneticMove = 12;
  const contentMove = 8;
  const mediaMove = 10;
  const maxScale = 1.026;
  const spring = {
    stiffness: 0.13,
    damping: 0.78
  };

  document.querySelectorAll("[data-suite-hover]").forEach((track) => {
    track.querySelectorAll(".suite-card").forEach((card) => {
      const state = {
        current: { x: 0, y: 0, rx: 0, ry: 0, cx: 0, cy: 0, mx: 0, my: 0, scale: 1, glow: 0 },
        target: { x: 0, y: 0, rx: 0, ry: 0, cx: 0, cy: 0, mx: 0, my: 0, scale: 1, glow: 0 },
        velocity: { x: 0, y: 0, rx: 0, ry: 0, cx: 0, cy: 0, mx: 0, my: 0, scale: 0, glow: 0 },
        raf: null,
        rect: null
      };

      const applyValue = (key, suffix = "px") => {
        state.velocity[key] += (state.target[key] - state.current[key]) * spring.stiffness;
        state.velocity[key] *= spring.damping;
        state.current[key] += state.velocity[key];
        if (key === "glow") {
          state.current[key] = Math.max(0, Math.min(1, state.current[key]));
        }
        if (key === "scale") {
          state.current[key] = Math.max(1, Math.min(maxScale, state.current[key]));
        }
        return `${state.current[key].toFixed(3)}${suffix}`;
      };

      const render = () => {
        card.style.setProperty("--magnet-x", applyValue("x"));
        card.style.setProperty("--magnet-y", applyValue("y"));
        card.style.setProperty("--tilt-x", applyValue("rx", "deg"));
        card.style.setProperty("--tilt-y", applyValue("ry", "deg"));
        card.style.setProperty("--content-x", applyValue("cx"));
        card.style.setProperty("--content-y", applyValue("cy"));
        card.style.setProperty("--media-x", applyValue("mx"));
        card.style.setProperty("--media-y", applyValue("my"));
        card.style.setProperty("--suite-scale", applyValue("scale", ""));
        card.style.setProperty("--glow-alpha", applyValue("glow", ""));

        const settled = Object.keys(state.current).every((key) =>
          Math.abs(state.current[key] - state.target[key]) < 0.01 && Math.abs(state.velocity[key]) < 0.01
        );
        if (!settled) {
          state.raf = window.requestAnimationFrame(render);
        } else {
          state.raf = null;
        }
      };

      const start = () => {
        if (!state.raf) {
          state.raf = window.requestAnimationFrame(render);
        }
      };

      const activate = () => {
        track.classList.add("has-active");
        card.classList.add("is-active");
        state.rect = card.getBoundingClientRect();
        state.target.scale = finePointer && !reduced ? maxScale : 1.018;
        state.target.glow = 1;
        start();
      };

      const deactivate = () => {
        track.classList.remove("has-active");
        card.classList.remove("is-active");
        Object.assign(state.target, { x: 0, y: 0, rx: 0, ry: 0, cx: 0, cy: 0, mx: 0, my: 0, scale: 1, glow: 0 });
        state.rect = null;
        card.style.setProperty("--shine-x", "50%");
        card.style.setProperty("--shine-y", "30%");
        start();
      };

      card.addEventListener("pointerenter", activate);
      card.addEventListener("pointerleave", deactivate);
      card.addEventListener("pointercancel", deactivate);
      card.addEventListener("lostpointercapture", deactivate);
      card.addEventListener("focus", activate);
      card.addEventListener("blur", deactivate);

      if (!finePointer || reduced) {
        return;
      }

      card.addEventListener("pointermove", (event) => {
        if (!card.classList.contains("is-active")) {
          activate();
        }
        const rect = state.rect || card.getBoundingClientRect();
        const localX = event.clientX - rect.left;
        const localY = event.clientY - rect.top;
        const nx = Math.max(-1, Math.min(1, (localX - rect.width / 2) / (rect.width / 2)));
        const ny = Math.max(-1, Math.min(1, (localY - rect.height / 2) / (rect.height / 2)));

        card.style.setProperty("--shine-x", `${localX}px`);
        card.style.setProperty("--shine-y", `${localY}px`);
        state.target.x = nx * magneticMove;
        state.target.y = ny * (magneticMove * 0.78);
        state.target.ry = nx * maxTilt;
        state.target.rx = -ny * maxTilt;
        state.target.cx = nx * contentMove;
        state.target.cy = ny * (contentMove * 0.72);
        state.target.mx = nx * mediaMove;
        state.target.my = ny * (mediaMove * 0.82);
        state.target.scale = maxScale;
        state.target.glow = 1;
        start();
      });

      window.addEventListener("pointermove", (event) => {
        if (!card.classList.contains("is-active")) {
          return;
        }
        const rect = card.getBoundingClientRect();
        const pad = 42;
        const outside = event.clientX < rect.left - pad ||
          event.clientX > rect.right + pad ||
          event.clientY < rect.top - pad ||
          event.clientY > rect.bottom + pad;
        if (outside) {
          deactivate();
        }
      }, { passive: true });
    });
  });
}

function initializeChachagSite() {
  if (window.ChachaGSiteInitialized) {
    return;
  }
  window.ChachaGSiteInitialized = true;
  if (document.body.dataset.page === "gallery-admin") {
    renderGalleryAdmin();
  } else {
    renderConcept();
  }

  if (window.location.hash && window.location.hash !== "#top") {
    window.requestAnimationFrame(() => {
      document.querySelector(window.location.hash)?.scrollIntoView({ block: "start" });
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeChachagSite, { once: true });
} else {
  initializeChachagSite();
}
