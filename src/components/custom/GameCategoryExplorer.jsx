"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Card,
    CardBody,
    Button,
    Input,
    Chip,
    Tabs,
    Tab,
    ScrollShadow,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure
} from "@nextui-org/react";
import {
    Search,
    Gamepad2,
    Flame,
    Trophy,
    Ghost,
    Zap,
    Play,
    ArrowRight,
    Filter,
    LayoutGrid,
    Rocket,
    Cpu,
    X,
    Download,
    Globe
} from "lucide-react";
import Image from "next/image";
import NextLink from "next/link";

const GameCategoryExplorer = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedGame, setSelectedGame] = useState(null);
    const [currentImgIdx, setCurrentImgIdx] = useState(0);
    const galleryRef = useRef(null);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    // Auto-scroll logic for images
    useEffect(() => {
        let interval;
        if (isOpen && selectedGame?.images?.length > 1) {
            interval = setInterval(() => {
                setCurrentImgIdx((prev) => (prev + 1) % selectedGame.images.length);
            }, 2000);
        }
        return () => clearInterval(interval);
    }, [isOpen, selectedGame]);

    // Update scroll position when index changes
    useEffect(() => {
        if (galleryRef.current && selectedGame?.images?.length > 0) {
            const container = galleryRef.current;
            const scrollAmount = currentImgIdx * (container.offsetWidth * 0.8);
            container.scrollTo({ left: scrollAmount, behavior: "smooth" });
        }
    }, [currentImgIdx, selectedGame]);

    useEffect(() => {
        if (!isOpen) setCurrentImgIdx(0);
    }, [isOpen]);

    useEffect(() => {
        // Load local game.json data
        const loadGames = async () => {
            try {
                const response = await fetch('/nexgama/game.json');
                const data = await response.json();
                // Extract games from segments (Specially for you segment has many hits)
                const allGames = data.segments?.[0]?.hits || [];
                setGames(allGames);
                setLoading(false);
            } catch (err) {
                console.error("Failed to load game data:", err);
                setLoading(false);
            }
        };
        loadGames();
    }, []);

    const categories = [
        { id: "all", label: "All Games", icon: <LayoutGrid size={16} /> },
        { id: "action", label: "Action", icon: <Flame size={16} /> },
        { id: "puzzle", label: "Puzzles", icon: <Zap size={16} /> },
        { id: "adventure", label: "Adventure", icon: <Trophy size={16} /> },
        { id: "simulation", label: "Simulation", icon: <Ghost size={16} /> },
        { id: "racing", label: "Racing", icon: <Rocket size={16} /> },
        { id: "strategy", label: "Strategy", icon: <Cpu size={16} /> },
        { id: "sports", label: "Sports", icon: <Trophy size={16} /> },
        { id: "multiplayer", label: "Multiplayer", icon: <Gamepad2 size={16} /> },
    ];

    const filteredGames = games.filter(game => {
        const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "all" || game.genres?.includes(selectedCategory);
        return matchesSearch && matchesCategory;
    });

    return (
        <section id="game-explorer" className="py-12 md:py-20 relative bg-background">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col space-y-12">
                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                        <div className="space-y-2 md:space-y-4">
                            <h2 className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] text-primary">Discover NexGama</h2>
                            <h3 className="text-2xl md:text-6xl font-black italic tracking-tighter uppercase leading-tight">
                                Check Out Games <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Categories</span>
                            </h3>
                        </div>

                        <div className="w-full md:max-w-xl relative group">
                            <Card
                                className="bg-content1/50 dark:bg-white/[0.03] backdrop-blur-3xl border-2 border-white/5 rounded-2xl md:rounded-[2rem] overflow-hidden shadow-xl transition-all duration-500 group-hover:border-primary/30 group-focus-within:border-primary/50 group-focus-within:shadow-2xl group-focus-within:shadow-primary/20"
                            >
                                <CardBody className="p-0">
                                    <Input
                                        placeholder="Search among 1000+ elite games..."
                                        variant="flat"
                                        size="lg"
                                        startContent={<Search className="text-primary group-focus-within:scale-110 transition-transform mr-2" size={24} />}
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        classNames={{
                                            base: "bg-transparent",
                                            inputWrapper: "h-20 bg-transparent border-none focus-within:!bg-transparent transition-all px-8 shadow-none",
                                            input: "font-black text-xl placeholder:text-default-400 py-4"
                                        }}
                                    />
                                </CardBody>
                            </Card>
                            {/* Decorative Glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[2rem] blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity -z-10" />
                        </div>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex overflow-x-auto pb-4 gap-2 md:gap-4 no-scrollbar">
                        {categories.map((cat) => (
                            <Button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                variant={selectedCategory === cat.id ? "solid" : "flat"}
                                color={selectedCategory === cat.id ? "primary" : "default"}
                                startContent={cat.icon}
                                className={`h-10 md:h-12 min-w-[100px] md:min-w-0 px-4 md:px-6 rounded-full font-black uppercase text-[9px] md:text-[10px] tracking-widest transition-all ${selectedCategory === cat.id ? "shadow-lg shadow-primary/20 scale-105" : "bg-white/5"
                                    }`}
                            >
                                {cat.label}
                            </Button>
                        ))}
                    </div>

                    {/* Game Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 min-h-[400px]">
                        <AnimatePresence mode="popLayout">
                            {loading ? (
                                // Skeleton loading state (could be improved)
                                Array.from({ length: 8 }).map((_, i) => (
                                    <div key={i} className="h-[300px] w-full rounded-[2.5rem] bg-default-100 animate-pulse" />
                                ))
                            ) : filteredGames.length > 0 ? (
                                filteredGames.slice(0, 12).map((game, idx) => (
                                    <motion.div
                                        key={game.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Card
                                            isPressable
                                            onClick={() => {
                                                setSelectedGame(game);
                                                onOpen();
                                            }}
                                            className="bg-content1/50 dark:bg-white/[0.03] backdrop-blur-3xl border-2 border-white/5 rounded-[2.5rem] h-full group hover:border-primary/50 transition-all overflow-hidden"
                                        >
                                            <CardBody className="p-0 relative flex flex-col">
                                                <div className="h-48 w-full overflow-hidden relative">
                                                    <Image
                                                        src={game.images?.[0] || "/nexgama/icon.png"}
                                                        alt={game.title}
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground scale-75 group-hover:scale-100 transition-transform shadow-xl">
                                                            <Play size={24} className="fill-current ml-1" />
                                                        </div>
                                                    </div>
                                                    {/* Genre Chips */}
                                                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                                        {game.genres?.slice(0, 2).map((g, i) => (
                                                            <Chip key={i} size="sm" variant="flat" className="bg-background/40 backdrop-blur-md text-[8px] font-black uppercase text-white border-none px-3">
                                                                {g}
                                                            </Chip>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="p-6 space-y-3 flex-grow">
                                                    <h4 className="text-xl font-black italic uppercase tracking-tight text-foreground line-clamp-1">{game.title}</h4>
                                                    <p className="text-default-500 text-xs font-medium line-clamp-2 leading-relaxed h-8">
                                                        {game.description}
                                                    </p>
                                                    <div className="pt-2 flex justify-between items-center">
                                                        <span className="text-[10px] font-bold text-primary flex items-center gap-1 uppercase tracking-widest">
                                                            <Zap size={12} fill="currentColor" /> Pro Play
                                                        </span>
                                                        <ArrowRight className="text-default-300 group-hover:text-primary group-hover:translate-x-1 transition-all" size={16} />
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="col-span-full h-80 flex flex-col items-center justify-center text-center space-y-4">
                                    <div className="p-6 rounded-full bg-default-100 text-default-400">
                                        <Gamepad2 size={48} />
                                    </div>
                                    <p className="text-default-500 font-bold uppercase tracking-widest text-sm">No games found in this quadrant.</p>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Show More Link */}
                    <div className="pt-10 flex justify-center">
                        <Button
                            as={NextLink}
                            href="/nexgama/library"
                            variant="bordered"
                            radius="full"
                            size="lg"
                            className="h-14 md:h-16 px-10 md:px-12 border-2 border-foreground text-foreground font-black uppercase tracking-widest hover:bg-foreground hover:text-background transition-all group text-xs md:text-sm"
                        >
                            Explore More Titles <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Game Details Modal Dialog */}
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="center"
                backdrop="blur"
                size="4xl"
                scrollBehavior="inside"
                classNames={{
                    base: "m-2 md:m-0 rounded-[2.5rem] bg-background border-2 border-white/10 shadow-3xl max-h-[85vh] overflow-hidden",
                    backdrop: "backdrop-blur-xl bg-black/40",
                    closeButton: "top-6 right-6 bg-white/10 hover:bg-white/20 transition-all text-white p-2 rounded-full z-50",
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody className="p-0 overflow-y-auto premium-scrollbar">
                                {selectedGame && (
                                    <div className="flex flex-col min-h-full">
                                        {/* Hero Presentation */}
                                        <div className="relative min-h-[550px] md:h-[600px] w-full flex flex-col justify-center p-6 pt-32 md:p-14 overflow-hidden">
                                            <Image
                                                src={selectedGame.images?.[0] || "/nexgama/icon.png"}
                                                alt={selectedGame.title}
                                                fill
                                                className="object-cover opacity-20 blur-xl scale-125 transition-all duration-1000"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-transparent" />

                                            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-14 text-center md:text-left">
                                                {/* Game Primary Icon */}
                                                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-[3.5rem] overflow-hidden border-8 border-white/10 shadow-3xl shrink-0 group">
                                                    <Image
                                                        src={selectedGame.images?.[0] || "/nexgama/icon.png"}
                                                        alt={selectedGame.title}
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                    />
                                                </div>

                                                <div className="flex flex-col items-center md:items-start space-y-4 md:pb-6 flex-grow">
                                                    <div className="space-y-3">
                                                        <h2 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter text-foreground leading-[0.95] drop-shadow-2xl">
                                                            {selectedGame.title}
                                                        </h2>
                                                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                                            {selectedGame.genres?.map((g, i) => (
                                                                <Chip key={i} size="sm" variant="flat" className="bg-primary/30 text-primary font-black uppercase text-[10px] md:text-xs px-6">
                                                                    {g}
                                                                </Chip>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <Button
                                                        as={NextLink}
                                                        href="https://play.google.com/store/apps/details?id=com.betapix.nexgama"
                                                        target="_blank"
                                                        variant="solid"
                                                        size="lg"
                                                        radius="full"
                                                        startContent={<Download size={24} className="stroke-[3px]" />}
                                                        className="h-16 md:h-20 px-12 md:px-16 font-black italic uppercase tracking-widest shadow-2xl !bg-[#00ffcc] !text-black text-xs md:text-lg mt-6 hover:scale-105 transition-all border-none"
                                                        style={{ backgroundColor: '#00ffcc', color: '#000000', opacity: 1 }}
                                                    >
                                                        Install NexGama Pro App
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Detailed Intelligence Content */}
                                        <div className="p-8 md:p-16 space-y-16">
                                            {/* Mission Objective (Description) */}
                                            <div className="space-y-6 max-w-4xl mx-auto">
                                                <h3 className="flex items-center gap-3 text-primary font-black uppercase tracking-[0.4em] text-xs italic">
                                                    <div className="w-8 h-[2px] bg-primary" /> MISSION OBJECTIVE
                                                </h3>
                                                <p className="text-default-500 text-xl md:text-2xl font-black italic leading-tight uppercase opacity-90">
                                                    {selectedGame.description}
                                                </p>
                                            </div>

                                            {/* Tactics & Operational Guide */}
                                            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
                                                <div className="md:col-span-3 space-y-6">
                                                    <h3 className="flex items-center gap-3 text-primary font-black uppercase tracking-[0.4em] text-xs italic">
                                                        <div className="w-8 h-[2px] bg-primary" /> OPERATIONAL GUIDE
                                                    </h3>
                                                    <div className="p-10 rounded-[2.5rem] bg-white/[0.03] border-2 border-white/5 backdrop-blur-3xl relative overflow-hidden">
                                                        <Zap size={100} className="absolute -bottom-10 -right-10 text-primary opacity-5 rotate-12" />
                                                        <p className="text-foreground/90 font-black italic leading-relaxed text-sm md:text-lg uppercase whitespace-pre-line tracking-tight">
                                                            {selectedGame.howToPlayText || "Universal controls active. Point, click, and dominate the digital realm."}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Compatibility Stats */}
                                                <div className="md:col-span-2 p-10 rounded-[2.5rem] border-2 border-white/10 dark:bg-white/[0.02] flex flex-col justify-center space-y-8">
                                                    <div className="space-y-1">
                                                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">PROTOCOL STATUS</p>
                                                        <p className="text-3xl font-black uppercase italic text-foreground tracking-tighter leading-none">ELITE ACCESS</p>
                                                    </div>
                                                    <ul className="space-y-4">
                                                        <li className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-foreground/70">
                                                            <Globe size={20} className="text-primary" /> ARCHITECTED FOR BROWSER
                                                        </li>
                                                        <li className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-foreground/70">
                                                            <Zap size={20} className="text-primary" /> LOW LATENCY RENDERING
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* Archival Captures (Gallery) */}
                                            {selectedGame.images?.length > 1 && (
                                                <div className="space-y-8">
                                                    <h3 className="flex items-center gap-3 text-primary font-black uppercase tracking-[0.4em] text-xs italic">
                                                        <div className="w-8 h-[2px] bg-primary" /> ARCHIVAL CAPTURES
                                                    </h3>
                                                    <div ref={galleryRef} className="flex gap-6 overflow-x-auto no-scrollbar pb-10 scroll-smooth">
                                                        {selectedGame.images.map((img, i) => (
                                                            <div key={i} className="relative aspect-video h-[200px] md:h-[350px] rounded-[2rem] overflow-hidden shrink-0 border-4 border-white/5 group shadow-2xl">
                                                                <Image src={img} alt={`Capture ${i}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                                                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Screenshot Progress Dots */}
                                                    <div className="flex justify-center gap-2 -mt-4">
                                                        {selectedGame.images.map((_, i) => (
                                                            <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === currentImgIdx ? "w-8 bg-primary" : "w-1.5 bg-white/20"}`} />
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Bottom Decorative Element */}
                                        <div className="h-24 w-full flex items-center justify-center opacity-20">
                                            <div className="w-1 h-12 bg-primary rounded-full animate-pulse capitalize" />
                                        </div>
                                    </div>
                                )}
                            </ModalBody>
                            <ModalFooter className="p-0 border-t border-white/5 bg-background dark:bg-black/90 backdrop-blur-3xl">
                                <Button
                                    fullWidth
                                    variant="light"
                                    className="h-24 rounded-none font-black uppercase tracking-[0.8em] text-[10px] text-default-400 hover:text-primary hover:bg-white/10 transition-all font-bold"
                                    onClick={onClose}
                                >
                                    DISCARD INTELLIGENCE <X size={20} className="ml-4" />
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </section>
    );
};

export default GameCategoryExplorer;
