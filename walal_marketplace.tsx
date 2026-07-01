import React, { useState, useEffect } from 'react';
import { 
  Search, Menu, User, MessageSquare, MapPin, 
  ShieldCheck, Phone, Clock, ChevronDown, 
  Building2, Factory, Tag, FileText, Star, 
  Zap, Bell, Upload, Briefcase, Truck, Heart,
  Globe, Eye, EyeOff, ShieldAlert, Award, 
  FileSpreadsheet, Plus, CheckCircle, RefreshCw, 
  Trash2, Send, Info, DollarSign, ArrowRight, X, Check,
  Share2, Shield, Flame, AlertCircle, Compass, ThumbsUp, Filter, ThumbsDown,
  Facebook, Instagram, MessageCircle
} from 'lucide-react';

const ADDIS_NEIGHBORHOODS = [
  "Bole", "Ayat", "CMC", "Piazza", "Kazanchis", "Lebu", "Saris", "Megenagna", "Gerji", "Kirkos"
];

const initialB2bProducts = [
  {
    id: 1,
    title: "Industrial CNC Router Machine 4 Axis",
    category: "Machinery",
    supplier: "Addis Tech Manufacturing PLC",
    location: "Addis Ababa, Ethiopia",
    price: "$4,500.00",
    numericPrice: 4500,
    moq: 1,
    moqUnit: "Set",
    rating: 4.8,
    reviews: 124,
    verified: true,
    tradeAssurance: true,
    leadTime: "15 Days",
    specs: "ISO 9001, CE Certified, 4-axis water cooling spindle",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    title: "Wholesale 100% Organic Cotton Fabric (500GSM)",
    category: "Apparel",
    supplier: "Global Textiles Ltd.",
    location: "Hawassa Industrial Park",
    price: "$2.15 / Meter",
    numericPrice: 2.15,
    moq: 1000,
    moqUnit: "Meters",
    rating: 4.9,
    reviews: 89,
    verified: true,
    tradeAssurance: true,
    leadTime: "7 Days",
    specs: "OEKO-TEX Certified, GOTS Standard Organic Cotton",
    image: "https://images.unsplash.com/photo-1599643477874-5c866f466b0e?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    title: "Heavy Duty Excavator Hydraulics - OEM Quality",
    category: "Machinery",
    supplier: "Horn Machinery Imp/Exp",
    location: "Dire Dawa",
    price: "$850.00",
    numericPrice: 850,
    moq: 5,
    moqUnit: "Pieces",
    rating: 4.6,
    reviews: 42,
    verified: false,
    tradeAssurance: false,
    leadTime: "30 Days",
    specs: "High tensile steel, customized fitment available",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400"
  }
];

const initialC2cProducts = [
  {
    id: 1,
    title: "Toyota Corolla 2018 - Clean & Low Mileage",
    category: "Vehicles",
    seller: "Abebe K.",
    location: "Bole, Addis Ababa",
    timeAgo: "2 hours ago",
    price: "ETB 2,450,000",
    numericPrice: 2450000,
    condition: "Used",
    isNegotiable: true,
    boostType: "VIP", // 'VIP', 'Diamond', 'Basic', or null
    verifiedSeller: true,
    phone: "+251 911 23 45 67",
    specs: { brand: "Toyota", model: "Corolla", year: "2018", transmission: "Automatic", mileage: "42,000 km" },
    description: "Extremely clean interior and exterior. Maintained regularly with original parts. Serious buyers only. Price is slightly negotiable.",
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    title: "iPhone 13 Pro 256GB Sierra Blue (No faults)",
    category: "Phones",
    seller: "Sarah M.",
    location: "Kazanchis, Addis Ababa",
    timeAgo: "5 hours ago",
    price: "ETB 62,000",
    numericPrice: 62000,
    condition: "Like New",
    isNegotiable: true,
    boostType: "Diamond",
    verifiedSeller: true,
    phone: "+251 922 88 99 00",
    specs: { brand: "Apple", model: "iPhone 13 Pro", storage: "256GB", battery: "92%" },
    description: "Face ID is fully functional. Screen protector and bumper case applied from day one. Box and genuine cable included.",
    image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    title: "Modern 2-Bedroom Apartment For Rent in Ayat",
    category: "Real Estate",
    seller: "Dawit Real Estate",
    location: "Ayat, Addis Ababa",
    timeAgo: "1 day ago",
    price: "ETB 23,000 / month",
    numericPrice: 23000,
    condition: "Brand New",
    isNegotiable: false,
    boostType: "Basic",
    verifiedSeller: false,
    phone: "+251 944 11 22 33",
    specs: { bedrooms: "2", bathrooms: "2", furnishing: "Unfurnished" },
    description: "Located on the 3rd floor. Fitted with modern plumbing, security system, secure elevator, constant water, and electricity supply.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 4,
    title: "PlayStation 5 Console (Disc Edition) with 2 Controllers",
    category: "Electronics",
    seller: "Yonatan T.",
    location: "Piazza, Addis Ababa",
    timeAgo: "3 days ago",
    price: "ETB 45,000",
    numericPrice: 45000,
    condition: "Used",
    isNegotiable: true,
    boostType: null,
    verifiedSeller: true,
    phone: "+251 910 55 66 77",
    specs: { type: "Console", games: "2 Included", state: "Perfect" },
    description: "Works flawlessly. Never opened or repaired. Includes original cables, box, and 2 dualsense game controllers.",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=400"
  }
];

const initialRfqs = [
  {
    id: 1,
    title: "10,000 Pcs Industrial Safety Goggles Needed",
    quantity: 10000,
    unit: "Pieces",
    industry: "Machinery",
    specs: "Polycarbonate lenses, anti-fog treatment, EN166 standard certification required.",
    bids: 4,
    daysLeft: 5,
    status: "Active"
  }
];

function ProductCard({ product, startChatSim, setReportedProduct, setActiveModal, openNegotiateWidget }) {
  const [revealedPhone, setRevealedPhone] = useState(false);

  // Styling helpers based on Premium boost tiers
  const getBoostBanner = () => {
    switch (product.boostType) {
      case 'VIP':
        return (
          <span className="bg-yellow-400 text-yellow-950 px-2 py-1 rounded shadow-md flex items-center font-extrabold text-[10px] uppercase tracking-wide gap-1 animate-pulse">
            <Flame size={12} className="text-yellow-950 fill-yellow-950" /> VIP PREMIUM
          </span>
        );
      case 'Diamond':
        return (
          <span className="bg-blue-600 text-white px-2 py-1 rounded shadow-md flex items-center font-extrabold text-[10px] uppercase tracking-wide gap-1">
            <Award size={12} className="text-white fill-white" /> DIAMOND BOOST
          </span>
        );
      case 'Basic':
        return (
          <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded flex items-center font-bold text-[9px] uppercase tracking-wide">
            Top Ad
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`bg-white rounded-xl border overflow-hidden hover:shadow-2xl transition-all flex flex-col justify-between group relative ${
      product.boostType === 'VIP' ? 'ring-2 ring-yellow-400 border-yellow-200 shadow-lg' : 'border-slate-200'
    }`}>
      <div>
        {/* Ad Image Container */}
        <div className="relative h-44 overflow-hidden bg-slate-100">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
          />
          <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
            {getBoostBanner()}
            <span className="bg-slate-900/80 backdrop-blur-sm text-white px-2 py-0.5 rounded text-[10px] font-bold w-fit">
              {product.condition}
            </span>
          </div>
          <div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-sm text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded-md shadow-sm flex items-center gap-1">
            <MapPin size={11} className="text-emerald-500" /> {product.location}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 text-left">
          <div className="flex justify-between items-start gap-1">
            <span className="text-[9px] uppercase font-black tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
              {product.category}
            </span>
            <span className="text-slate-400 text-[10px] flex items-center gap-1">
              <Clock size={10} /> {product.timeAgo}
            </span>
          </div>

          <h3 className="font-bold text-slate-900 text-sm mt-2 line-clamp-2 hover:text-emerald-600 cursor-pointer" title={product.title}>
            {product.title}
          </h3>

          {/* Render category specs if available */}
          {product.specs && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {Object.entries(product.specs).map(([key, value]) => (
                <span key={key} className="text-[9px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded capitalize">
                  {key}: <strong className="text-slate-800">{value}</strong>
                </span>
              ))}
            </div>
          )}

          <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          <div className="flex items-center justify-between mt-3.5 pt-1 border-t border-slate-100">
            <div>
              <p className="text-lg font-black text-emerald-600">
                {product.price}
              </p>
              {product.isNegotiable && (
                <span className="text-[10px] font-extrabold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded uppercase tracking-wider">
                  Negotiable
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons: Phone Reveal, Direct Call & Interactive Negotiate Slider */}
      <div className="p-4 pt-0 border-t border-slate-100/60 bg-slate-50/50">
        <div className="flex items-center justify-between mb-3 mt-3">
          <div className="flex items-center overflow-hidden gap-1.5">
            <div className="w-7 h-7 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-xs font-bold shrink-0">
              {product.seller.charAt(0)}
            </div>
            <div className="overflow-hidden">
              <p className="text-xs text-slate-800 font-extrabold flex items-center truncate">
                {product.seller}
                {product.verifiedSeller && (
                  <ShieldCheck size={12} className="ml-1 text-emerald-500" title="Identity Audited & Verified" />
                )}
              </p>
              <p className="text-[9px] text-slate-400">Walal Trusted Seller</p>
            </div>
          </div>
          
          <div className="flex gap-1">
            <button 
              onClick={() => {
                const shareText = `Check out this listing on Walal: ${product.title} - ${product.price}`;
                if (navigator.share) {
                  navigator.share({ title: product.title, text: shareText, url: window.location.href });
                } else {
                  alert("Link copied to clipboard! Share it on your favorite social media.");
                }
              }}
              className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
              title="Share Product"
            >
              <Share2 size={15} />
            </button>
            <button 
              onClick={() => {
                setReportedProduct(product);
                setActiveModal('reportAd');
              }}
              className="p-1.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-md transition-colors"
              title="Report Ad for Fraud"
            >
              <ShieldAlert size={15} />
            </button>
            <button
              onClick={() => {
                const text = `Hey, let's negotiate on your listing "${product.title}" !`;
                window.open(`https://api.whatsapp.com/send?phone=${product.phone.replace(/[^0-9]/g, '')}&text=${encodeURIComponent(text)}`, '_blank');
              }}
              className="p-1.5 text-emerald-500 hover:text-white hover:bg-emerald-500 rounded-md transition-all border border-emerald-100"
              title="Chat via WhatsApp"
            >
              <span className="font-extrabold text-[10px]">WA</span>
            </button>
          </div>
        </div>

        {/* Dynamic Interactive Phone reveals */}
        <div className="grid grid-cols-2 gap-2">
          {revealedPhone ? (
            <a 
              href={`tel:${product.phone}`}
              className="col-span-1 bg-slate-900 text-white text-xs font-extrabold py-2 rounded-lg text-center flex items-center justify-center gap-1 animate-pulse hover:bg-slate-800"
            >
              <Phone size={11} /> {product.phone}
            </a>
          ) : (
            <button 
              onClick={() => setRevealedPhone(true)}
              className="col-span-1 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold py-2 rounded-lg text-xs transition-colors flex items-center justify-center gap-1"
            >
              📞 Show Contact
            </button>
          )}

          <button 
            onClick={() => openNegotiateWidget(product)}
            className="col-span-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-1"
          >
            🤝 Make an Offer
          </button>
        </div>

        <button 
          onClick={() => startChatSim(
            product.seller, 
            `Walal Deal: ${product.title}`, 
            `Hi! Is your ${product.title} still available? Can we schedule a meetup in Bole?`, 
            'C2C'
          )}
          className="w-full mt-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-1.5 rounded-md text-xs transition-colors flex items-center justify-center gap-1"
        >
          <MessageSquare size={12} /> Start Free Live Chat
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [activeMode, setActiveMode] = useState('C2C'); 
  const [isScrolled, setIsScrolled] = useState(false);
  const [b2bProducts, setB2bProducts] = useState(initialB2bProducts);
  const [c2cProducts, setC2cProducts] = useState(initialC2cProducts);
  const [rfqs, setRfqs] = useState(initialRfqs);
  
  const [b2bSearchQuery, setB2bSearchQuery] = useState("");
  const [c2cSearchQuery, setC2cSearchQuery] = useState("");
  const [b2bSelectedCategory, setB2bSelectedCategory] = useState("All");
  const [c2cSelectedCategory, setC2cSelectedCategory] = useState("All");
  const [b2bMinMoq, setB2bMinMoq] = useState("");
  const [c2cMaxPrice, setC2cMaxPrice] = useState("");
  const [c2cSelectedDistrict, setC2cSelectedDistrict] = useState("All");

  const [createCategorySelected, setCreateCategorySelected] = useState("Vehicles");

  const [activeModal, setActiveModal] = useState(null); 
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [reportedProduct, setReportedProduct] = useState(null);
  
  const [offerProduct, setOfferProduct] = useState(null);
  const [bidValue, setBidValue] = useState(0);
  const [bidResponse, setBidResponse] = useState(null);

  const [userProfile, setUserProfile] = useState({
    name: "Aman Kassahun",
    isLoggedIn: true,
    b2bVerified: false,
    c2cVerified: true,
    businessName: "Abyssinia Trades",
    taxId: "",
    phoneNumber: "+251 905 44 22 11",
    trustScore: 90
  });

  const [activeChat, setActiveChat] = useState({
    recipient: "",
    recipientSub: "",
    messages: [],
    mode: 'C2C'
  });
  const [messageInput, setMessageInput] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);

  const [activeEscrow, setActiveEscrow] = useState({
    id: "TXN-2026-9810",
    buyer: "Walal Enterprise Demo",
    supplier: "Addis Tech Manufacturing PLC",
    amount: "$4,500.00",
    item: "Industrial CNC Router Machine 4 Axis",
    milestone: 1
  });

  const [appAlert, setAppAlert] = useState(null);

  const alertInteractive = (title, msg) => {
    setAppAlert({ title, msg });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isB2B = activeMode === 'B2B';

  const filteredB2B = b2bProducts.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(b2bSearchQuery.toLowerCase()) || 
                          p.supplier.toLowerCase().includes(b2bSearchQuery.toLowerCase());
    const matchesCategory = b2bSelectedCategory === "All" || p.category === b2bSelectedCategory;
    const matchesMoq = b2bMinMoq === "" || p.moq <= parseInt(b2bMinMoq);
    return matchesSearch && matchesCategory && matchesMoq;
  });

  const filteredC2C = c2cProducts.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(c2cSearchQuery.toLowerCase()) || 
                          p.seller.toLowerCase().includes(c2cSearchQuery.toLowerCase());
    const matchesCategory = c2cSelectedCategory === "All" || p.category === c2cSelectedCategory;
    const matchesPrice = c2cMaxPrice === "" || p.numericPrice <= parseInt(c2cMaxPrice);
    const matchesDistrict = c2cSelectedDistrict === "All" || p.location.includes(c2cSelectedDistrict);
    return matchesSearch && matchesCategory && matchesPrice && matchesDistrict;
  });

  const handleCreateRfq = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const newRfq = {
      id: rfqs.length + 1,
      title: data.get("title") || "Sourcing Contract Requirement",
      quantity: parseInt(data.get("quantity")) || 100,
      unit: data.get("unit") || "Pieces",
      industry: data.get("industry") || "Machinery",
      specs: data.get("specs") || "Standard commercial verification parameters",
      bids: 0,
      daysLeft: 14,
      status: "Active"
    };
    setRfqs([newRfq, ...rfqs]);
    setActiveModal(null);
    alertInteractive("RFQ Published", "Your sourcing request is now active on the supplier board. Manufacturers will submit bids shortly.");
  };

  const handlePostAd = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const priceNum = parseFloat(data.get("price")) || 0;
    
    let customSpecs = {};
    if (createCategorySelected === "Vehicles") {
      customSpecs = { brand: data.get("v_brand") || "Generic", model: data.get("v_model") || "Car", year: data.get("v_year") || "2020", transmission: data.get("v_trans") || "Manual" };
    } else if (createCategorySelected === "Phones") {
      customSpecs = { brand: data.get("p_brand") || "Apple", model: data.get("p_model") || "Smartphone", storage: data.get("p_storage") || "128GB" };
    } else {
      customSpecs = { type: "General Item", condition: "Inspected" };
    }

    const newAd = {
      id: c2cProducts.length + 1,
      title: data.get("title") || "Classified Item",
      category: createCategorySelected,
      seller: userProfile.name,
      location: `${data.get("district") || "Bole"}, Addis Ababa`,
      timeAgo: "Just now",
      price: `ETB ${priceNum.toLocaleString()}`,
      numericPrice: priceNum,
      condition: data.get("condition") || "Used",
      isNegotiable: data.get("negotiable") === "on",
      boostType: data.get("boost") || null,
      verifiedSeller: userProfile.c2cVerified,
      phone: userProfile.phoneNumber || "+251 911 00 00 00",
      specs: customSpecs,
      description: data.get("description") || "Call directly to inspect item.",
      image: data.get("image") || "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=400"
    };

    setC2cProducts([newAd, ...c2cProducts]);
    setActiveModal(null);
    alertInteractive(
      "Listing Created!", 
      `Congratulations! Your listing is now live. ${newAd.boostType ? `Promoted as ${newAd.boostType} tier to boost view metrics.` : ''}`
    );
  };

  const handleVerificationSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    if (isB2B) {
      setUserProfile(prev => ({
        ...prev,
        businessName: data.get("businessName"),
        b2bVerified: true,
        trustScore: 99
      }));
      alertInteractive("B2B Credentials Verified", "ISO-9001 vetting cleared. Storefront upgraded to Verified Status.");
    } else {
      setUserProfile(prev => ({
        ...prev,
        phoneNumber: data.get("phone"),
        c2cVerified: true,
        trustScore: 95
      }));
      alertInteractive("OTP Verified", "Your social trust score increased to 95%! Verification badge activated.");
    }
    setActiveModal(null);
  };

  const handleReportSubmit = (e) => {
    e.preventDefault();
    alertInteractive("Report Logged", "Moderators have put a temporary trace on this account. Inspection will be completed within 2 hours.");
    setActiveModal(null);
    setReportedProduct(null);
  };

  const startChatSim = (recipient, sub, customGreeting, mode) => {
    setActiveChat({
      recipient,
      recipientSub: sub,
      mode: mode || activeMode,
      messages: [
        { sender: 'them', text: customGreeting || "Hi, is this item negotiable? Where can we meet to test?" }
      ]
    });
    setIsChatOpen(true);
  };

  const sendChatMessage = () => {
    if (!messageInput.trim()) return;
    const userMsg = { sender: 'me', text: messageInput };
    
    let replyText = "Perfect, I'll meet you in Bole near Dembel Mall tomorrow.";
    if (activeChat.mode === 'C2C') {
      if (messageInput.toLowerCase().includes("available")) {
        replyText = "Yes, still available! I'm in CMC area if you'd like to drop by to check it out.";
      } else if (messageInput.toLowerCase().includes("negotiat") || messageInput.toLowerCase().includes("price")) {
        replyText = "I can do a discount of ETB 3,000 max if you pay cash tomorrow. Deal?";
      }
    } else {
      if (messageInput.toLowerCase().includes("sample") || messageInput.toLowerCase().includes("shipping")) {
        replyText = "We offer maritime shipping with active container tracking and Trade Assurance escrows.";
      }
    }

    setActiveChat(prev => ({
      ...prev,
      messages: [...prev.messages, userMsg]
    }));
    setMessageInput("");

    setTimeout(() => {
      setActiveChat(prev => ({
        ...prev,
        messages: [...prev.messages, { sender: 'them', text: replyText }]
      }));
    }, 1000);
  };

  const openNegotiateWidget = (product) => {
    setOfferProduct(product);
    setBidValue(product.numericPrice * 0.9); 
    setBidResponse(null);
    setActiveModal('negotiateOffer');
  };

  const submitSimulatedOffer = () => {
    const discountPercent = ((offerProduct.numericPrice - bidValue) / offerProduct.numericPrice) * 100;
    
    let responseText = "";
    let status = "";
    
    if (discountPercent > 25) {
      responseText = `No way! That's too low for a ${offerProduct.title}. I can only drop 5% max.`;
      status = "declined";
    } else if (discountPercent > 10) {
      responseText = `I cannot accept that, but let's meet in the middle at ETB ${(offerProduct.numericPrice * 0.95).toLocaleString()}. What do you say?`;
      status = "countered";
    } else {
      responseText = `Deal accepted! Contact me directly at ${offerProduct.phone} so we can arrange inspection.`;
      status = "accepted";
    }

    setBidResponse({ text: responseText, status });
  };

  return (
    <div className="font-sans bg-slate-50 min-h-screen selection:bg-emerald-200 text-slate-900 flex flex-col justify-between">
      
      {appAlert && (
        <div className="fixed bottom-6 right-6 z-[9999] max-w-sm bg-slate-900 border-l-4 border-emerald-500 text-white rounded-xl shadow-2xl p-4 animate-bounce">
          <div className="flex justify-between items-start mb-1">
            <h5 className="font-extrabold text-emerald-400 flex items-center gap-1.5 text-xs">
              <ShieldCheck className="shrink-0" size={16} /> {appAlert.title}
            </h5>
            <button onClick={() => setAppAlert(null)} className="text-slate-400 hover:text-white ml-2">
              <X size={15} />
            </button>
          </div>
          <p className="text-[11px] text-slate-200 leading-normal">{appAlert.msg}</p>
        </div>
      )}

      <div className="bg-emerald-700 text-white text-[11px] py-1.5 px-4 hidden md:block border-b border-emerald-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-semibold">
          <div className="flex space-x-4">
            <span className="flex items-center gap-1"><Shield size={11} className="text-yellow-400" /> Walal Safe Rules Apply</span>
            <span onClick={() => setActiveModal('safetyCenter')} className="hover:text-yellow-200 cursor-pointer underline decoration-dotted">Buyer Safety Guideline Checklist</span>
          </div>
          <div className="flex space-x-4 items-center">
            <span className="bg-emerald-800 px-2.5 py-0.5 rounded text-white flex items-center gap-1">
              <Compass size={11} /> Hub Location: Addis Ababa
            </span>
            <span className="cursor-pointer hover:underline text-yellow-300 flex items-center gap-1" onClick={() => setActiveModal('monetization')}>
              ⚡ VIP Sponsoring Plans
            </span>
          </div>
        </div>
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md text-slate-800' : (isB2B ? 'bg-indigo-950 text-white' : 'bg-emerald-600 text-white')
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => {
            setActiveMode('C2C');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}>
            <span className={`text-2xl font-black tracking-tight flex items-center ${
              isScrolled ? 'text-emerald-600' : 'text-white'
            }`}>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-1 text-white font-extrabold ${
                isScrolled ? 'bg-emerald-600' : 'bg-white text-emerald-600'
              }`}>
                W
              </div>
              Walal
            </span>
            <span className="hidden sm:inline-block text-[9px] font-black uppercase tracking-wider px-2 py-0.5 bg-yellow-400 text-yellow-950 rounded-full shadow-sm">
              Local Peer-To-Peer
            </span>
          </div>

          <div className="hidden md:flex bg-black/10 p-1.5 rounded-full border border-white/10">
            <button 
              onClick={() => setActiveMode('C2C')}
              className={`flex items-center px-6 py-1.5 rounded-full text-xs font-black transition-all ${
                !isB2B 
                  ? 'bg-white text-emerald-700 shadow-md' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <Tag size={13} className="mr-1.5 text-emerald-600" /> Classifieds
            </button>
            <button 
              onClick={() => setActiveMode('B2B')}
              className={`flex items-center px-6 py-1.5 rounded-full text-xs font-black transition-all ${
                isB2B 
                  ? 'bg-white text-purple-700 shadow-md' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <Factory size={13} className="mr-1.5 text-blue-600" /> B2B Sourcing
            </button>
          </div>

          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setActiveModal('onboarding')} 
              className={`hidden lg:flex items-center space-x-2 py-1 px-3 rounded-lg border cursor-pointer hover:bg-white/10 transition-colors ${
                isScrolled ? 'border-slate-200 text-slate-800' : 'border-white/20 text-white'
              }`}
            >
              <div className="w-5 h-5 rounded-full bg-yellow-400 text-yellow-950 flex items-center justify-center text-[10px] font-bold">
                {userProfile.c2cVerified ? "✓" : "?"}
              </div>
              <div className="text-left text-xs">
                <p className="font-extrabold leading-none">{userProfile.name}</p>
                <p className="text-[9px] text-yellow-100 font-medium">Trust: {userProfile.trustScore}%</p>
              </div>
            </button>

            <button 
              onClick={() => setIsChatOpen(prev => !prev)} 
              className={`flex flex-col items-center relative p-1 ${isScrolled ? 'text-slate-600' : 'text-white'}`}
              title="Private Inbox Messages"
            >
              <MessageSquare size={19} />
              <span className="text-[9px] mt-0.5 hidden sm:block font-bold">Inbox</span>
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-yellow-400 text-yellow-950 text-[9px] flex items-center justify-center font-black">
                1
              </span>
            </button>

            <button 
              onClick={() => setActiveModal(isB2B ? 'rfq' : 'postAd')}
              className={`flex items-center px-4 py-2 rounded-xl font-black text-xs shadow-md transition-all uppercase tracking-wide ${
                isScrolled 
                  ? (isB2B ? 'bg-orange-600 hover:bg-orange-700 text-white' : 'bg-emerald-600 hover:bg-emerald-700 text-white')
                  : 'bg-yellow-400 text-yellow-950 hover:bg-yellow-300'
              }`}
            >
              <Upload size={14} className="mr-1" />
              {isB2B ? "Post Sourcing RFQ" : "Sell Item Free"}
            </button>
          </div>
        </div>

        <div className="md:hidden border-t border-white/10 bg-black/10 p-2 flex justify-center">
          <div className="flex bg-slate-200/90 p-1 rounded-full w-full max-w-sm">
            <button 
              onClick={() => setActiveMode('C2C')}
              className={`flex-1 flex justify-center items-center py-2 rounded-full text-xs font-black transition-all ${
                !isB2B ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-700'
              }`}
            >
              <Tag size={12} className="mr-1" /> Classifieds
            </button>
            <button 
              onClick={() => setActiveMode('B2B')}
              className={`flex-1 flex justify-center items-center py-2 rounded-full text-xs font-black transition-all ${
                isB2B ? 'bg-orange-600 text-white shadow-md' : 'text-slate-700'
              }`}
            >
              <Factory size={12} className="mr-1" /> B2B Sourcing
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        
        {!isB2B ? (
          <div className="bg-slate-50 min-h-screen pb-20">
            
            <div className="bg-gradient-to-r from-emerald-600 to-teal-800 text-white py-12 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
              
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="bg-yellow-400 text-yellow-950 text-[10px] font-black tracking-widest px-3 py-1 rounded-full w-fit mx-auto mb-3 uppercase shadow-md">
                  🚀 100% Peer-to-Peer Verified Local Trade
                </div>
                <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight leading-none">
                  Empowering Digital Commerce—Connecting People, Products, and Opportunities
                </h1>
                <p className="text-emerald-100 max-w-2xl mx-auto text-xs md:text-sm font-medium mb-8">
                  Get high response ratios, local buyers, direct calls, and no sales fees. Always schedule inspections in public parks, lobbies, or secure bank spaces.
                </p>

                <div className="max-w-4xl mx-auto bg-white p-3 rounded-2xl flex flex-col lg:flex-row shadow-2xl gap-2.5 text-slate-800 text-left">
                  
                  <div className="flex items-center px-4 py-2 border-b lg:border-b-0 lg:border-r border-slate-200">
                    <MapPin size={18} className="text-emerald-600 mr-2 shrink-0" />
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase">District Location</p>
                      <select 
                        value={c2cSelectedDistrict}
                        onChange={(e) => setC2cSelectedDistrict(e.target.value)}
                        className="bg-transparent font-extrabold text-xs text-slate-800 outline-none cursor-pointer mt-0.5"
                      >
                        <option value="All">All Districts</option>
                        {ADDIS_NEIGHBORHOODS.map(n => <option key={n} value={n}>{n}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center px-4 py-2 border-b lg:border-b-0 lg:border-r border-slate-200">
                    <Tag size={18} className="text-emerald-600 mr-2 shrink-0" />
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase">Category Type</p>
                      <select 
                        value={c2cSelectedCategory}
                        onChange={(e) => setC2cSelectedCategory(e.target.value)}
                        className="bg-transparent font-extrabold text-xs text-slate-800 outline-none cursor-pointer mt-0.5"
                      >
                        <option value="All">All Categories</option>
                        <option value="Vehicles">🚗 Vehicles & Cars</option>
                        <option value="Phones">📱 Phones & Tablets</option>
                        <option value="Real Estate">🏠 Houses & Apartments</option>
                        <option value="Electronics">🔌 Home Electronics</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex-1 flex items-center px-4 py-2">
                    <Search size={20} className="text-slate-400 mr-2 shrink-0" />
                    <input 
                      type="text" 
                      value={c2cSearchQuery}
                      onChange={(e) => setC2cSearchQuery(e.target.value)}
                      placeholder="Search... (e.g., iPhone 13, Toyota Corolla, Ayat rental)"
                      className="w-full bg-transparent text-slate-800 font-medium placeholder-slate-400 text-xs focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center px-4 border-l border-slate-200/50">
                    <span className="text-[10px] font-bold text-slate-500 mr-2 uppercase">Max Price:</span>
                    <input 
                      type="number"
                      placeholder="ETB"
                      value={c2cMaxPrice}
                      onChange={(e) => setC2cMaxPrice(e.target.value)}
                      className="w-20 text-center text-xs font-bold text-slate-800 bg-slate-100 rounded-md py-1 focus:outline-emerald-500"
                    />
                  </div>

                  <button className="bg-yellow-400 hover:bg-yellow-300 text-yellow-950 font-black px-6 py-2.5 rounded-xl text-xs uppercase tracking-wide transition-all shadow-md shrink-0">
                    Search Ads
                  </button>
                </div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
                <span className="text-xs text-slate-500 font-black uppercase shrink-0">Quick Districts:</span>
                <button 
                  onClick={() => setC2cSelectedDistrict("All")}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold shrink-0 transition-all ${
                    c2cSelectedDistrict === "All" ? 'bg-emerald-600 text-white' : 'bg-white border text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  All Addis Ababa
                </button>
                {ADDIS_NEIGHBORHOODS.map(n => (
                  <button 
                    key={n}
                    onClick={() => setC2cSelectedDistrict(n)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold shrink-0 transition-all ${
                      c2cSelectedDistrict === n ? 'bg-emerald-600 text-white' : 'bg-white border text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
              
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-8 text-left flex items-start gap-3 shadow-sm">
                <ShieldAlert size={20} className="text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-900 leading-relaxed">
                  <span className="font-extrabold uppercase">⚠️ Critical Safety Tip:</span> We do not monitor offline handovers. Ensure you meet your seller in highly populated public locations (such as a busy cafe inside a shopping mall or inside your local commercial bank branch). Inspect all mechanical items and smartphone displays fully before authorizing cash transfers.
                </div>
              </div>

              <div className="flex justify-between items-baseline mb-6 border-b border-slate-200 pb-3">
                <div className="text-left">
                  <h2 className="text-2xl font-extrabold text-slate-900">Trending Local Classified Feed</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Showing {filteredC2C.length} local offers matching your query parameters</p>
                </div>
                {c2cSelectedDistrict !== "All" && (
                  <button 
                    onClick={() => { setC2cSelectedDistrict("All"); setC2cSelectedCategory("All"); setC2cSearchQuery(""); }}
                    className="text-xs text-emerald-600 font-bold hover:underline"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>

              {filteredC2C.length === 0 ? (
                <div className="bg-white border rounded-2xl p-16 text-center max-w-lg mx-auto shadow-sm">
                  <AlertCircle size={44} className="mx-auto text-amber-500 mb-3" />
                  <p className="font-bold text-slate-800 text-base">No classified listings found</p>
                  <p className="text-xs text-slate-500 mt-1">Try broadening your target maximum pricing parameters or selecting a different city district.</p>
                  <button 
                    onClick={() => { setC2cSelectedDistrict("All"); setC2cSelectedCategory("All"); setC2cSearchQuery(""); setC2cMaxPrice(""); }}
                    className="mt-4 bg-emerald-600 text-white px-5 py-2 rounded-xl text-xs font-bold hover:bg-emerald-700"
                  >
                    Reset Sourcing filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredC2C.map(product => (
                    <ProductCard 
                      key={product.id}
                      product={product}
                      startChatSim={startChatSim}
                      setReportedProduct={setReportedProduct}
                      setActiveModal={setActiveModal}
                      openNegotiateWidget={openNegotiateWidget}
                    />
                  ))}
                </div>
              )}

              <div className="bg-slate-900 rounded-3xl p-8 mt-16 text-white text-left flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
                <div>
                  <span className="bg-yellow-400 text-yellow-950 font-black text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full">
                    Sellers Premium Multipliers
                  </span>
                  <h3 className="text-2xl font-black mt-3">Bump your listing to the top of our feed</h3>
                  <p className="text-xs text-slate-300 mt-1.5 max-w-xl">
                    Upgrade to VIP or Diamond boosts to show prominent colorful badges, pin listings above regular items, and gain direct phone metrics analytics dashboards.
                  </p>
                </div>
                <button 
                  onClick={() => setActiveModal('monetization')}
                  className="bg-yellow-400 hover:bg-yellow-300 text-yellow-950 font-black px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md shrink-0"
                >
                  ⚡ Boost Classified Ad
                </button>
              </div>

            </div>
          </div>
        ) : (
          <div className="bg-slate-50 min-h-screen pb-20">
            <div className="bg-gradient-to-r from-blue-800 to-purple-900 text-white py-16 text-left relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <button 
                  onClick={() => { setActiveMode('C2C'); window.scrollTo(0, 0); }}
                  className="mb-4 flex items-center text-xs font-bold text-blue-200 hover:text-white transition-colors"
                >
                  <ArrowRight className="rotate-180 mr-1" size={14} /> Back to Home
                </button>
                <span className="bg-white/10 text-blue-100 border border-white/20 text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">
                  Wholesale Enterprise Network
                </span>
                <h1 className="text-4xl font-extrabold tracking-tight mb-4">
                  Bulk Industrial Sourcing & Manufacturing
                </h1>
                <p className="text-orange-50 max-w-2xl text-xs md:text-sm mb-8 leading-relaxed">
                  Source bulk materials, industrial components, and textiles. Access verified factory suppliers equipped with accredited ISO production audits. Protect transactions via platform escrow.
                </p>

                <div className="bg-white p-2.5 rounded-xl flex flex-col md:flex-row gap-2 text-slate-800 shadow-xl max-w-3xl">
                  <div className="flex items-center px-4 py-2 border-r border-slate-100">
                    <span className="text-xs font-bold text-slate-500 uppercase mr-2">Sector:</span>
                    <select 
                      value={b2bSelectedCategory} 
                      onChange={(e) => setB2bSelectedCategory(e.target.value)}
                      className="text-xs font-bold outline-none cursor-pointer text-purple-600 bg-transparent"
                    >
                      <option value="All">All Categories</option>
                      <option value="Machinery">Machinery</option>
                      <option value="Apparel">Apparel</option>
                    </select>
                  </div>
                  <div className="flex-1 flex items-center px-4 py-2">
                    <Search className="text-slate-400 mr-2 shrink-0" size={18} />
                    <input 
                      type="text" 
                      value={b2bSearchQuery}
                      onChange={(e) => setB2bSearchQuery(e.target.value)}
                      placeholder="Search wholesale CNCs, textiles, solar..."
                      className="w-full text-xs font-semibold focus:outline-none bg-transparent"
                    />
                  </div>
                  <div className="flex items-center px-4 border-l border-slate-100">
                    <span className="text-xs font-bold text-slate-400 mr-2 uppercase">Max MOQ:</span>
                    <input 
                      type="number"
                      placeholder="Any"
                      value={b2bMinMoq}
                      onChange={(e) => setB2bMinMoq(e.target.value)}
                      className="w-16 bg-slate-100 text-slate-800 text-xs font-bold text-center py-1 rounded-md"
                    />
                  </div>
                  <button className="bg-orange-600 text-white font-bold text-xs px-6 py-2.5 rounded-lg hover:bg-orange-700 uppercase transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.95]">
                    Apply
                  </button>
                </div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                <div className="lg:col-span-2 text-left">
                  <h2 className="text-2xl font-black text-slate-900 mb-6">Verified Wholesale Catalogues</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {filteredB2B.map(product => (
                      <div key={product.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all flex flex-col justify-between">
                        <div>
                          <div className="relative h-44 bg-slate-100">
                            <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                            {product.tradeAssurance && (
                              <span className="absolute top-2 left-2 bg-slate-900/90 text-white text-[9px] font-extrabold px-2 py-0.5 rounded-md flex items-center shadow">
                                <ShieldCheck size={11} className="mr-1 text-blue-400" /> Trade Assurance
                              </span>
                            )}
                          </div>
                          <div className="p-4">
                            <span className="text-[10px] text-purple-600 bg-purple-50 px-2 py-0.5 rounded font-black uppercase">
                              {product.category}
                            </span>
                            <h3 className="font-extrabold text-slate-900 text-sm mt-1.5">{product.title}</h3>
                            <p className="text-xs text-slate-400 italic mt-0.5">{product.specs}</p>
                            
                            <div className="mt-3 flex justify-between items-center bg-slate-50 p-2 rounded-lg">
                              <div>
                                <p className="text-[9px] text-slate-400 font-bold uppercase">Wholesale Price</p>
                                <p className="text-sm font-black text-slate-900">{product.price}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-[9px] text-slate-400 font-bold uppercase">Min Order</p>
                                <p className="text-xs font-extrabold text-slate-700">{product.moq} {product.moqUnit}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 bg-slate-50 border-t flex gap-2">
                          <button 
                            onClick={() => startChatSim(product.supplier, `Corporate Sourcing Enquiry`, `Hello! We'd like to get a formal quote. Do you support private label specifications?`)}
                            className="flex-1 bg-white border border-blue-200 text-blue-600 text-xs py-2 rounded-lg font-bold hover:bg-blue-50 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.95]"
                          >
                            Negotiate Bulk
                          </button>
                          <button 
                            onClick={() => {
                              setActiveEscrow({
                                id: "TXN-2026-" + Math.floor(1000 + Math.random() * 9000),
                                buyer: "Abyssinia Trades Corp",
                                supplier: product.supplier,
                                amount: product.price,
                                item: product.title,
                                milestone: 1
                              });
                              setActiveModal('escrowTracker');
                            }}
                            className="bg-orange-600 text-white text-xs px-4 py-2 rounded-lg font-bold hover:bg-orange-700 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.95]"
                          >
                            Draft Escrow
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-1 text-left">
                  <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl sticky top-24 border-t-4 border-orange-500">
                    <h3 className="text-lg font-black mb-1 flex items-center gap-1.5 text-orange-400">
                      <FileText size={18} /> Active RFQ Sourcing Board
                    </h3>
                    <p className="text-xs text-slate-300 mb-6">Wholesalers bid competitive custom proposals on posted specifications.</p>
                    
                    <div className="space-y-4 mb-6">
                      {rfqs.map(rfq => (
                        <div key={rfq.id} className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                          <div className="flex justify-between items-center mb-1.5">
                            <span className="bg-purple-500/10 text-purple-300 text-[9px] font-black px-1.5 py-0.5 rounded">
                              {rfq.industry}
                            </span>
                            <span className="text-[10px] text-slate-400">
                              ⌛ {rfq.daysLeft} days left
                            </span>
                          </div>
                          <h4 className="font-extrabold text-white text-xs leading-normal">{rfq.title}</h4>
                          <p className="text-[11px] text-slate-400 leading-relaxed mt-1">{rfq.specs}</p>
                          <div className="flex justify-between items-center mt-3 pt-2 border-t border-white/5 text-[11px]">
                            <span className="text-slate-300 font-bold">Vol: <strong className="text-white">{rfq.quantity} {rfq.unit}</strong></span>
                            <span className="text-orange-300 font-black bg-orange-500/15 px-2 py-0.5 rounded">
                              ✓ {rfq.bids} Bid Submissions
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <button 
                      onClick={() => setActiveModal('rfq')}
                      className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wide transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.95]"
                    >
                      Publish Sourcing Specification
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

      </main>

      {isChatOpen && (
        <div className="fixed bottom-0 right-4 w-80 md:w-96 bg-white border border-slate-300 rounded-t-2xl shadow-2xl z-50 overflow-hidden flex flex-col h-[450px]">
          <div className={`p-4 text-white flex justify-between items-center ${activeChat.mode === 'B2B' ? 'bg-slate-900' : 'bg-emerald-600'}`}>
            <div className="flex items-center space-x-2 text-left">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs uppercase text-white">
                {activeChat.recipient ? activeChat.recipient.charAt(0) : "W"}
              </div>
              <div>
                <h5 className="font-bold text-sm leading-tight">{activeChat.recipient || "Walal Assistant"}</h5>
                <p className="text-[10px] text-slate-200">{activeChat.recipientSub || "Direct Messaging Network"}</p>
              </div>
            </div>
            <button onClick={() => setIsChatOpen(false)} className="hover:bg-white/10 p-1 rounded">
              <X size={16} />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50">
            {activeChat.messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-xl p-3 text-xs shadow-sm text-left leading-normal ${
                  m.sender === 'me' 
                    ? (activeChat.mode === 'B2B' ? 'bg-blue-600 text-white' : 'bg-emerald-600 text-white')
                    : 'bg-white text-slate-800 border'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 bg-white border-t border-slate-200 flex items-center space-x-2">
            <input 
              type="text" 
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendChatMessage()}
              placeholder="Type message..." 
              className="flex-1 bg-slate-100 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-slate-400 text-slate-900"
            />
            <button 
              onClick={sendChatMessage}
              className={`p-2 rounded-lg text-white hover:opacity-95 ${activeChat.mode === 'B2B' ? 'bg-blue-600' : 'bg-emerald-600'}`}
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      )}

      {activeModal === 'rfq' && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 z-[999]">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 relative shadow-2xl text-slate-900">
            <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
              <X size={20} />
            </button>
            <h3 className="text-xl font-black text-slate-900 mb-1 flex items-center">
              <FileText className="text-blue-600 mr-2" /> Publish Bulk Sourcing Tender (RFQ)
            </h3>
            <p className="text-xs text-slate-400 mb-6">Suppliers bid customized pricing rates on your requested technical profiles.</p>
            
            <form onSubmit={handleCreateRfq} className="space-y-4 text-left">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Desired Sourcing Item *</label>
                <input required name="title" type="text" placeholder="e.g. 10,000 Yards Organic Canvas Cotton Fabric" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-blue-500" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Volume Quantity *</label>
                  <input required name="quantity" type="number" placeholder="10000" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-blue-500" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Unit</label>
                  <select name="unit" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-blue-500">
                    <option>Pieces</option>
                    <option>Yards</option>
                    <option>Meters</option>
                    <option>Tons</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Industry Group</label>
                <select name="industry" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-blue-500">
                  <option value="Machinery">Machinery & Steel Parts</option>
                  <option value="Apparel">Apparel & Raw Textiles</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Material Specifications / ISO Standards</label>
                <textarea name="specs" rows="3" placeholder="Provide quality requirements such as GSM values, physical tolerance standards, or custom CAD files." className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-blue-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg text-xs mt-2 uppercase">
                Submit RFQ Board Post
              </button>
            </form>
          </div>
        </div>
      )}

      {activeModal === 'postAd' && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 z-[999] overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 relative shadow-2xl text-slate-900 my-8">
            <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
              <X size={20} />
            </button>
            <h3 className="text-xl font-black text-emerald-600 mb-1 flex items-center">
              <Plus size={20} className="mr-1" /> Post Classified Ad
            </h3>
            <p className="text-xs text-slate-400 mb-6">List items for sale to thousands of verified local buyers in Addis Ababa districts.</p>
            
            <form onSubmit={handlePostAd} className="space-y-4 text-left">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Listing Title *</label>
                  <input required name="title" type="text" placeholder="e.g. Clean iPhone 13 Pro Sierra Blue" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-emerald-500" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Target Category *</label>
                  <select 
                    value={createCategorySelected} 
                    onChange={(e) => setCreateCategorySelected(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-emerald-500 font-bold"
                  >
                    <option value="Vehicles">🚗 Vehicles & Cars</option>
                    <option value="Phones">📱 Phones & Tablets</option>
                    <option value="Real Estate">🏠 Houses & Apartments</option>
                    <option value="Electronics">🔌 Home Electronics</option>
                  </select>
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-3">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Dynamic Category Specifications</p>
                {createCategorySelected === "Vehicles" && (
                  <div className="grid grid-cols-2 gap-2">
                    <input name="v_brand" placeholder="Brand (e.g., Toyota)" className="bg-white border p-1.5 text-xs rounded" />
                    <input name="v_model" placeholder="Model (e.g., Corolla)" className="bg-white border p-1.5 text-xs rounded" />
                    <input name="v_year" placeholder="Year (e.g., 2018)" className="bg-white border p-1.5 text-xs rounded" />
                    <input name="v_mileage" placeholder="Mileage (e.g., 40k)" className="bg-white border p-1.5 text-xs rounded" />
                    <select name="v_trans" className="bg-white border p-1.5 text-xs rounded col-span-2">
                      <option>Automatic</option>
                      <option>Manual</option>
                    </select>
                  </div>
                )}
                {createCategorySelected === "Phones" && (
                  <div className="grid grid-cols-2 gap-2">
                    <input name="p_brand" placeholder="Brand (e.g., Apple)" className="bg-white border p-1.5 text-xs rounded" />
                    <input name="p_model" placeholder="Model (e.g., iPhone 13)" className="bg-white border p-1.5 text-xs rounded" />
                    <input name="p_storage" placeholder="Storage (e.g., 256GB)" className="bg-white border p-1.5 text-xs rounded" />
                    <input name="p_battery" placeholder="Battery Health %" className="bg-white border p-1.5 text-xs rounded" />
                  </div>
                )}
                {createCategorySelected === "Real Estate" && (
                  <div className="grid grid-cols-2 gap-2">
                    <input name="re_beds" placeholder="Bedrooms" className="bg-white border p-1.5 text-xs rounded" />
                    <input name="re_baths" placeholder="Bathrooms" className="bg-white border p-1.5 text-xs rounded" />
                    <input name="re_size" placeholder="Size (sqm)" className="bg-white border p-1.5 text-xs rounded" />
                    <input name="re_furnish" placeholder="Furnishing" className="bg-white border p-1.5 text-xs rounded" />
                  </div>
                )}
                {createCategorySelected === "Electronics" && (
                  <div className="grid grid-cols-2 gap-2">
                    <input name="e_type" placeholder="Type (e.g. TV, Fridge)" className="bg-white border p-1.5 text-xs rounded col-span-2" />
                    <input name="e_warranty" placeholder="Warranty Remaining" className="bg-white border p-1.5 text-xs rounded col-span-2" />
                  </div>
                )}
              </div>

              {/* Uploads Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Add Photos *</label>
                  <input type="file" accept="image/*" multiple className="w-full text-[10px] text-slate-500 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Video Demo</label>
                  <input type="file" accept="video/*" className="w-full text-[10px] text-slate-500 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                </div>
                <div className="col-span-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Documents / Scans (Receipts/Authenticity)</label>
                  <input type="file" accept=".pdf,.doc,.docx" className="w-full text-[10px] text-slate-500 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Addis District *</label>
                  <select name="district" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-emerald-500">
                    {ADDIS_NEIGHBORHOODS.map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Item Condition</label>
                  <select name="condition" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-emerald-500">
                    <option>Like New</option>
                    <option>Used</option>
                    <option>Brand New</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Price (ETB) *</label>
                  <input required name="price" type="number" placeholder="45000" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-emerald-500" />
                </div>
                <div className="flex items-center mt-6">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" name="negotiable" defaultChecked className="accent-emerald-600 rounded" />
                    <span className="text-xs font-bold text-slate-700">Price Negotiable?</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Item Description & Meeting spot</label>
                <textarea name="description" rows="3" placeholder="Describe faults, specifications, and state preferred safe public spots (e.g. Dembel, friendship mall)." className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-emerald-500"></textarea>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3">
                <label className="block text-[10px] font-bold text-emerald-800 uppercase mb-1">Sponsor Visibility (Boost)</label>
                <select name="boost" className="w-full bg-white border border-emerald-300 rounded-lg px-3 py-1.5 text-xs font-bold focus:outline-emerald-500">
                  <option value="">None (Free Listing)</option>
                  <option value="Basic">Top Ad Bump (ETB 150)</option>
                  <option value="Diamond">Diamond Premium (ETB 500)</option>
                  <option value="VIP">VIP Premium Multiplier (ETB 1,200)</option>
                </select>
              </div>

              <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black py-3 rounded-xl text-xs uppercase tracking-wide">
                Publish Classified Ad
              </button>
            </form>
          </div>
        </div>
      )}

      {activeModal === 'negotiateOffer' && offerProduct && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 z-[999]">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 relative shadow-2xl text-slate-900 text-left">
            <button onClick={() => { setActiveModal(null); setOfferProduct(null); }} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
              <X size={20} />
            </button>
            <h3 className="text-xl font-black text-slate-900 flex items-center gap-1">
              🤝 Negotiate On Item
            </h3>
            <p className="text-xs text-slate-400 mb-4">You are bidding directly with seller <strong className="text-slate-700">{offerProduct.seller}</strong> on:</p>

            <div className="flex gap-3 bg-slate-50 p-2.5 rounded-xl border mb-5">
              <img src={offerProduct.image} className="w-14 h-14 object-cover rounded-lg" alt="" />
              <div>
                <p className="text-xs font-bold text-slate-800 line-clamp-1">{offerProduct.title}</p>
                <p className="text-xs text-emerald-600 font-black mt-1">Listed Price: {offerProduct.price}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-xs font-bold text-slate-400 uppercase">Your Suggested Offer:</span>
                <span className="text-xl font-black text-emerald-600">ETB {Math.round(bidValue).toLocaleString()}</span>
              </div>
              <input 
                type="range"
                min={offerProduct.numericPrice * 0.6}
                max={offerProduct.numericPrice}
                step="500"
                value={bidValue}
                onChange={(e) => {
                  setBidValue(parseFloat(e.target.value));
                  setBidResponse(null);
                }}
                className="w-full accent-emerald-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-extrabold uppercase">
                <span>Low Offer (-40%)</span>
                <span>List Price</span>
              </div>

              <button 
                onClick={submitSimulatedOffer}
                className="w-full bg-slate-950 hover:bg-slate-800 text-white font-bold py-2.5 rounded-xl text-xs uppercase"
              >
                Transmit Bid Offer
              </button>

              {bidResponse && (
                <div className={`mt-4 p-4 rounded-xl border ${
                  bidResponse.status === 'accepted' 
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900' 
                    : bidResponse.status === 'countered'
                    ? 'bg-amber-50 border-amber-200 text-amber-900'
                    : 'bg-rose-50 border-rose-200 text-rose-900'
                }`}>
                  <p className="text-[10px] font-bold uppercase tracking-wider mb-1">
                    Seller response:
                  </p>
                  <p className="text-xs font-bold leading-normal">{bidResponse.text}</p>
                  {bidResponse.status === 'accepted' && (
                    <a 
                      href={`tel:${offerProduct.phone}`}
                      className="mt-3 block text-center bg-emerald-600 text-white font-bold text-xs py-2 rounded-lg"
                    >
                      📞 Dial {offerProduct.seller}
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {activeModal === 'safetyCenter' && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 z-[999]">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 relative shadow-2xl text-slate-950 text-left">
            <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
              <X size={20} />
            </button>
            <h3 className="text-xl font-black text-slate-900 mb-1 flex items-center">
              <ShieldCheck className="text-emerald-500 mr-2" /> Safe-Buying Shield Checklist
            </h3>
            <p className="text-xs text-slate-400 mb-6">Never send prepayments. Protect your money on local classified purchases.</p>
            
            <div className="space-y-4 text-xs text-slate-700">
              <div className="flex items-start gap-3">
                <span className="bg-emerald-50 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center font-bold shrink-0 mt-0.5">1</span>
                <div>
                  <p className="font-extrabold text-slate-800">No Advance Payments</p>
                  <p className="text-slate-500 mt-0.5 leading-normal">Do not transfer delivery deposits, customs clearing fees, or holds to a seller through mobile cash wallets prior to testing the product.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-emerald-50 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center font-bold shrink-0 mt-0.5">2</span>
                <div>
                  <p className="font-extrabold text-slate-800">Public Safety Standard Meeting Points</p>
                  <p className="text-slate-500 mt-0.5 leading-normal">Always arrange swap inspect points inside active public facilities: shopping mall cafes, office lobby checkpoints, or bank branches where CCTV security is present.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-emerald-50 text-emerald-700 rounded-full w-6 h-6 flex items-center justify-center font-bold shrink-0 mt-0.5">3</span>
                <div>
                  <p className="font-extrabold text-slate-800">Verify Device Serial Numbers</p>
                  <p className="text-slate-500 mt-0.5 leading-normal">On smartphones and PCs, check device security locks, sign out of cloud profiles on spot, and test charging capabilities before exchanging keys or bank transaction reference codes.</p>
                </div>
              </div>
            </div>

            <button onClick={() => setActiveModal(null)} className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl text-xs mt-6 uppercase tracking-wide">
              I Promise to Follow Rules
            </button>
          </div>
        </div>
      )}

      {activeModal === 'monetization' && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 z-[999]">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 relative shadow-2xl text-slate-950 text-left">
            <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
              <X size={20} />
            </button>
            <h3 className="text-xl font-black text-slate-900 mb-1 flex items-center">
              <Flame className="text-yellow-400 fill-yellow-400 mr-1.5" /> VIP Visibility Packages
            </h3>
            <p className="text-xs text-slate-400 mb-6">Gain immediate visibility boost, colorful listings, and up to 5x higher call volumes.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-slate-200 rounded-2xl p-4 flex flex-col justify-between">
                <div>
                  <h4 className="font-black text-xs text-slate-800 uppercase">Basic Top-Ad</h4>
                  <p className="text-[10px] text-slate-400 mt-1 leading-normal">Pins your listing above free ads for 24 hours.</p>
                </div>
                <div>
                  <p className="text-xl font-extrabold text-emerald-600 mt-4">ETB 150</p>
                  <button onClick={() => { alertInteractive("Basic Boost Active", "Your classified ad has been pinned to top slot."); setActiveModal(null); }} className="w-full bg-emerald-500 text-white font-bold py-1.5 rounded-lg text-[10px] mt-3 uppercase">
                    Order Boost
                  </button>
                </div>
              </div>

              <div className="border-2 border-yellow-400 bg-yellow-50/25 rounded-2xl p-4 flex flex-col justify-between relative shadow-lg">
                <span className="absolute -top-2.5 left-4 bg-yellow-400 text-yellow-950 font-black text-[8px] tracking-widest uppercase px-2 py-0.5 rounded-full">
                  Fast Seller
                </span>
                <div>
                  <h4 className="font-black text-xs text-slate-900 uppercase mt-1">VIP Premium</h4>
                  <p className="text-[10px] text-slate-400 mt-1 leading-normal">Shows high-visibility VIP tags, locks top spots for 7 days, and displays analytical dashboards.</p>
                </div>
                <div>
                  <p className="text-xl font-black text-emerald-600 mt-4">ETB 1,200</p>
                  <button onClick={() => { alertInteractive("VIP Boost Activated", "Sponsoring flags activated for your listings."); setActiveModal(null); }} className="w-full bg-yellow-400 hover:bg-yellow-300 text-yellow-950 font-black py-1.5 rounded-lg text-[10px] mt-3 uppercase">
                    Activate VIP
                  </button>
                </div>
              </div>

              <div className="border border-slate-200 rounded-2xl p-4 flex flex-col justify-between">
                <div>
                  <h4 className="font-black text-xs text-slate-800 uppercase">Diamond Boost</h4>
                  <p className="text-[10px] text-slate-400 mt-1 leading-normal">Highlight ads with special border badges for 3 full days.</p>
                </div>
                <div>
                  <p className="text-xl font-extrabold text-emerald-600 mt-4">ETB 500</p>
                  <button onClick={() => { alertInteractive("Diamond Boost Activated", "Your visual borders have updated to Diamond status."); setActiveModal(null); }} className="w-full bg-slate-900 text-white font-bold py-1.5 rounded-lg text-[10px] mt-3 uppercase">
                    Activate Diamond
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeModal === 'onboarding' && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 z-[999]">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 relative shadow-2xl text-slate-950 text-left">
            <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
              <X size={20} />
            </button>
            <h3 className="text-xl font-black text-slate-900 mb-1 flex items-center">
              <ShieldCheck className="text-emerald-500 mr-2" /> Trust & Safety Profile
            </h3>
            <p className="text-xs text-slate-400 mb-6">Gain a trust verification badge on your profile to maximize transaction credibility.</p>
            
            <form onSubmit={handleVerificationSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Your Full Name *</label>
                <input required name="name" defaultValue={userProfile.name} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-emerald-500" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Your Phone Number (OTP Linked) *</label>
                <input required name="phone" defaultValue={userProfile.phoneNumber} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-emerald-500" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Verify SMS Code Pin</label>
                <div className="flex gap-2">
                  <input maxLength={4} placeholder="5188" className="w-1/3 bg-slate-50 border border-slate-200 rounded-lg text-center font-bold tracking-widest text-xs focus:outline-emerald-500" />
                  <button type="button" onClick={() => alertInteractive("Code Dispatched", "Simulated OTP transmission processed.")} className="w-2/3 bg-slate-100 font-bold text-xs py-2 rounded-lg">
                    Re-send Code SMS
                  </button>
                </div>
              </div>
              <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-xs uppercase mt-2">
                Clear Verification Vetting
              </button>
            </form>
          </div>
        </div>
      )}

      {activeModal === 'reportAd' && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 z-[999]">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 relative shadow-2xl text-slate-950 text-left">
            <button onClick={() => { setActiveModal(null); setReportedProduct(null); }} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
              <X size={20} />
            </button>
            <h3 className="text-lg font-black text-rose-600 mb-1 flex items-center">
              <ShieldAlert className="mr-1.5" /> Flag Suspicious Classified
            </h3>
            <p className="text-xs text-slate-400 mb-4">You are logging a report against <strong className="text-slate-800">{reportedProduct?.title || "Listing"}</strong></p>
            
            <form onSubmit={handleReportSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Fraud / Compliance Category</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-rose-500 font-bold text-slate-800">
                  <option>Suspected advance payment trap</option>
                  <option>Counterfeit product profile</option>
                  <option>Prohibited item category listed</option>
                  <option>Abusive or toxic messaging history</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Provide Supporting Context</label>
                <textarea rows="3" placeholder="Tell our security agents what makes this listing suspicious." className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-rose-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-2.5 rounded-xl text-xs uppercase">
                Dispatch Security Review
              </button>
            </form>
          </div>
        </div>
      )}

      {activeModal === 'escrowTracker' && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 z-[999]">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 relative shadow-2xl text-slate-950 text-left">
            <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
              <X size={20} />
            </button>
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-xl font-black text-slate-900 flex items-center">
                <ShieldCheck className="text-blue-500 mr-2" /> B2B Sourcing Escrow
              </h3>
              <span className="text-[10px] font-bold px-2 py-0.5 bg-blue-100 text-blue-700 rounded-md">
                {activeEscrow.id}
              </span>
            </div>
            <p className="text-xs text-slate-400 mb-6">Securing payments via Trade Assurance milestones.</p>
            
            <div className="bg-slate-50 p-4 rounded-xl border space-y-2 text-xs mb-6">
              <p><strong>Industrial Item:</strong> {activeEscrow.item}</p>
              <p><strong>Supplier Entity:</strong> {activeEscrow.supplier}</p>
              <p><strong>Contract Fund value:</strong> <strong className="text-emerald-600 font-bold">{activeEscrow.amount}</strong></p>
            </div>

            <div className="space-y-4 mb-6 relative pl-6">
              <div className="absolute top-2 bottom-2 left-2 w-0.5 bg-slate-200"></div>
              {[
                { step: 1, label: "Purchase Order Drafted", desc: "Both parties agreed to contract parameters." },
                { step: 2, label: "Escrow Funds Secured", desc: "Funds held in neutral clearing account." },
                { step: 3, label: "Completed Shipment dispatched", desc: "Wholesale materials logged by logistics agent." }
              ].map((m) => (
                <div key={m.step} className="relative">
                  <div className={`absolute -left-6 top-1.5 w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    activeEscrow.milestone >= m.step ? 'bg-blue-600 border-blue-600 text-white text-[8px]' : 'bg-white border-slate-300'
                  }`}>
                    {activeEscrow.milestone > m.step && "✓"}
                  </div>
                  <div>
                    <p className={`text-xs font-bold ${activeEscrow.milestone >= m.step ? 'text-blue-900' : 'text-slate-400'}`}>
                      {m.label}
                    </p>
                    <p className="text-[10px] text-slate-500">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <button 
                disabled={activeEscrow.milestone >= 3}
                onClick={() => {
                  setActiveEscrow(p => ({ ...p, milestone: p.milestone + 1 }));
                  alertInteractive("Escrow Advanced", "Funds are securely advanced to the next milestone.");
                }}
                className="flex-1 bg-blue-600 text-white font-bold py-2 rounded-xl text-xs disabled:bg-slate-300"
              >
                Advance Milestone
              </button>
              <button 
                onClick={() => setActiveEscrow(p => ({ ...p, milestone: 1 }))}
                className="bg-slate-100 text-slate-700 font-bold py-2 px-4 rounded-xl text-xs"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
            <div>
              <h4 className="text-white font-bold mb-4">Walal Local Classifieds</h4>
              <ul className="space-y-2 text-xs">
                <li onClick={() => { setActiveMode('C2C'); setC2cSelectedCategory("Vehicles"); }} className="hover:text-emerald-400 cursor-pointer">🚗 Vehicles & Cars</li>
                <li onClick={() => { setActiveMode('C2C'); setC2cSelectedCategory("Phones"); }} className="hover:text-emerald-400 cursor-pointer">📱 Phones & Tablets</li>
                <li onClick={() => { setActiveMode('C2C'); setC2cSelectedCategory("Real Estate"); }} className="hover:text-emerald-400 cursor-pointer">🏠 Houses & Renting</li>
                <li onClick={() => setActiveModal('safetyCenter')} className="hover:text-emerald-400 cursor-pointer text-yellow-300">⚠️ Safe-Swap Guide</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Enterprise Bulk Sourcing</h4>
              <ul className="space-y-2 text-xs">
                <li onClick={() => { setActiveMode('B2B'); setB2bSelectedCategory("Machinery"); }} className="hover:text-blue-400 cursor-pointer">🏭 Heavy Machinery</li>
                <li onClick={() => { setActiveMode('B2B'); setB2bSelectedCategory("Apparel"); }} className="hover:text-blue-400 cursor-pointer">🧵 Bulk Cotton Textiles</li>
                <li onClick={() => setActiveModal('rfq')} className="hover:text-blue-400 cursor-pointer">📝 Publish Sourcing Brief</li>
                <li onClick={() => setActiveModal('escrowTracker')} className="hover:text-blue-400 cursor-pointer">🛡️ Trade Assurance Escrow</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Connect With Us</h4>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.facebook.com/share/p/1cN2kKwfbb/" target="_blank" rel="noreferrer" className="bg-slate-800 p-2 rounded-lg hover:text-white transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="https://www.instagram.com/deresulema" target="_blank" rel="noreferrer" className="bg-slate-800 p-2 rounded-lg hover:text-white transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="https://t.me/Rmderefx02" target="_blank" rel="noreferrer" className="bg-slate-800 p-2 rounded-lg hover:text-white transition-colors">
                  <MessageCircle size={18} />
                </a>
                <a href="https://www.tiktok.com/@deresu.lema" target="_blank" rel="noreferrer" className="bg-slate-800 p-2 rounded-lg hover:text-white transition-colors text-[10px] font-black leading-none flex items-center justify-center w-[34px]">
                  TT
                </a>
                <a href="https://youtube.com/@deresulema4935" target="_blank" rel="noreferrer" className="bg-slate-800 p-2 rounded-lg hover:text-white transition-colors">
                  <Zap size={18} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Verification Audit</h4>
              <p className="text-xs leading-relaxed mb-4">Walal protects peer-to-peer trade by verification. Always check products before paying.</p>
              <div className="flex space-x-2">
                <button onClick={() => setActiveModal('onboarding')} className="bg-slate-800 text-white text-xs px-3 py-1.5 rounded-lg hover:bg-slate-700">
                  Profile Status
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>&copy; 2026 Walal Local Ecosystem. Certified Peer-To-Peer Classifieds & Industrial Trade.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Safety Center</a>
              <a href="#" className="hover:text-white">Terms of Platform Use</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}