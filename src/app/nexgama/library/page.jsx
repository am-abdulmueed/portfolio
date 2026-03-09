"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Card,
    CardBody,
    Input,
    Button,
    Chip,
    Link,
    Breadcrumbs,
    BreadcrumbItem,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
    ScrollShadow as NextUIScrollShadow
} from "@nextui-org/react";
import { Search, Play, ArrowLeft, Gamepad2, Zap, Filter, LayoutGrid, Download, Globe, Info, Sparkles, X } from "lucide-react";
import Image from "next/image";
import NextLink from "next/link";

const GameLibrary = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [visibleCount, setVisibleCount] = useState(24);
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
            const scrollAmount = currentImgIdx * (container.offsetWidth * 0.8); // Approximating width
            container.scrollTo({ left: scrollAmount, behavior: "smooth" });
        }
    }, [currentImgIdx, selectedGame]);

    useEffect(() => {
        if (!isOpen) setCurrentImgIdx(0);
    }, [isOpen]);

    useEffect(() => {
        const loadGames = async () => {
            try {
                const response = await fetch('/nexgama/game.json');
                const data = await response.json();
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
        "all", "action", "puzzle", "adventure", "simulation", "racing", "strategy", "sports", "multiplayer"
    ];

    const filteredGames = games.filter(game => {
        const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === "all" || game.genres?.includes(selectedCategory);
        return matchesSearch && matchesCategory;
    });

    const displayGames = filteredGames.slice(0, visibleCount);
    const hasMore = visibleCount < filteredGames.length;
    const loadMore = () => setVisibleCount(prev => prev + 24);

    return (
        <main className="min-h-screen bg-background pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header Section */}
                <div className="flex flex-col gap-8 mb-16">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex items-center gap-6">
                            <Button
                                as={NextLink}
                                href="/nexgama"
                                variant="bordered"
                                isIconOnly
                                radius="full"
                                className="w-12 h-12 border-white/10 text-default-500 hover:text-primary hover:border-primary transition-all"
                            >
                                <ArrowLeft size={20} />
                            </Button>
                            <div className="space-y-1">
                                <Breadcrumbs
                                    underline="hover"
                                    className="opacity-90"
                                    itemClasses={{
                                        item: "text-xs md:text-sm font-black uppercase tracking-[0.2em] text-default-500",
                                        separator: "text-primary mx-2 font-bold"
                                    }}
                                >
                                    <BreadcrumbItem as={NextLink} href="/">Home</BreadcrumbItem>
                                    <BreadcrumbItem as={NextLink} href="/nexgama">NexGama</BreadcrumbItem>
                                    <BreadcrumbItem isCurrent className="text-foreground">Library</BreadcrumbItem>
                                </Breadcrumbs>
                                <h1 className="text-5xl md:text-[10rem] font-black italic uppercase tracking-tighter leading-[0.8]">
                                    NexGama <span className="text-primary italic">Library</span>
                                </h1>
                            </div>
                        </div>
                        <div className="text-right hidden xl:block">
                            <p className="text-xs font-black uppercase tracking-[0.6em] text-primary mb-2">Pro Gaming Database</p>
                            <p className="text-default-500 font-black uppercase tracking-widest text-[10px]">
                                Browsing <span className="text-foreground text-sm">{displayGames.length}</span> / {filteredGames.length} Available
                            </p>
                        </div>
                    </div>

                    {/* Pro Search & Toolbar - SWAPPED */}
                    <div className="flex flex-col gap-8">
                        {/* Categories List Container */}
                        <div className="w-full bg-content2/50 dark:bg-white/[0.05] p-2 md:p-4 rounded-full border-2 border-white/10 backdrop-blur-3xl flex items-center shadow-2xl overflow-hidden group">
                            <div className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar px-4 w-full py-2">
                                {categories.map((cat) => (
                                    <Button
                                        key={cat}
                                        onClick={() => {
                                            setSelectedCategory(cat);
                                            setVisibleCount(24);
                                        }}
                                        variant={selectedCategory === cat ? "solid" : "light"}
                                        size="md"
                                        className={`rounded-full px-8 md:px-14 font-black uppercase text-[10px] md:text-xs tracking-[0.2em] shrink-0 h-12 md:h-16 transition-all ${selectedCategory === cat
                                            ? "shadow-2xl shadow-primary/40 bg-black text-white dark:bg-white dark:text-black scale-105"
                                            : "text-default-500 hover:text-primary hover:bg-white/10 font-bold"
                                            }`}
                                    >
                                        {cat}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        {/* Search Bar Second */}
                        <div className="relative w-full">
                            <Input
                                placeholder="Search elite titles..."
                                variant="bordered"
                                size="lg"
                                startContent={<Search className="text-primary" size={24} />}
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setVisibleCount(24);
                                }}
                                classNames={{
                                    inputWrapper: "h-20 rounded-[2.5rem] bg-background border-2 border-white/10 focus-within:!border-primary transition-all shadow-2xl px-10",
                                    input: "font-black text-xl placeholder:text-default-400"
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Library Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-8">
                    <AnimatePresence mode="popLayout">
                        {loading ? (
                            Array.from({ length: 12 }).map((_, i) => (
                                <div key={i} className="aspect-[4/5] rounded-[2rem] bg-white/5 animate-pulse" />
                            ))
                        ) : displayGames.length > 0 ? (
                            displayGames.map((game, idx) => (
                                <motion.div
                                    key={game.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <Card
                                        isPressable
                                        onClick={() => {
                                            setSelectedGame(game);
                                            onOpen();
                                        }}
                                        className="bg-content1/50 dark:bg-white/[0.03] backdrop-blur-3xl border-2 border-white/5 rounded-[2rem] h-full group hover:border-primary/50 transition-all overflow-hidden"
                                    >
                                        <CardBody className="p-0 relative aspect-[4/5] flex flex-col">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={game.images?.[0] || "/nexgama/icon.png"}
                                                alt={game.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                                                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform">
                                                    <Info size={24} className="ml-1" />
                                                </div>
                                            </div>
                                            <div className="absolute bottom-4 left-4 right-4 z-10">
                                                <h4 className="text-[10px] md:text-sm font-black italic uppercase tracking-tight text-white line-clamp-1 drop-shadow-md">{game.title}</h4>
                                                <p className="text-[8px] text-primary font-black uppercase tracking-widest">{game.genres?.[0]}</p>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </motion.div>
                            ))
                        ) : (
                            <div className="col-span-full py-20 flex flex-col items-center justify-center text-center space-y-6">
                                <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center text-default-300">
                                    <Gamepad2 size={48} />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-black uppercase">No Intel Found</h3>
                                    <p className="text-default-500 font-medium">Try adjusting your filters or search query.</p>
                                </div>
                                <Button
                                    onClick={() => { setSearchQuery(""); setSelectedCategory("all"); setVisibleCount(24); }}
                                    variant="flat"
                                    className="font-black uppercase tracking-widest"
                                >
                                    Reset Discovery
                                </Button>
                            </div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Load More */}
                {hasMore && (
                    <div className="mt-20 flex justify-center">
                        <Button
                            onClick={loadMore}
                            variant="flat"
                            radius="full"
                            size="lg"
                            className="h-16 px-12 border-2 border-white/5 font-black uppercase tracking-widest bg-foreground text-background hover:scale-105 transition-all text-xs md:text-sm"
                        >
                            Load More Titles <Zap size={16} className="ml-2 fill-current" />
                        </Button>
                    </div>
                )}
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
        </main>
    );
};

const ScrollShadow = ({ children, orientation, className, hideScrollBar }) => (
    <div className={`${className} ${hideScrollBar ? 'no-scrollbar' : ''} overflow-${orientation === 'horizontal' ? 'x' : 'y'}-auto flex items-center`}>
        {children}
    </div>
);

export default GameLibrary;
