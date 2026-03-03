import { useState } from 'react';
import { findHubs } from '@/app/actions';

interface Hub {
    title: string;
    uri: string;
}

export const useHubFinder = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);
    const [results, setResults] = useState<Hub[]>([]);

    const handleFindHub = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!searchQuery.trim() || isSearching) return;

        setIsSearching(true);
        setHasSearched(true);
        setResults([]);

        try {
            const extractedResults = await findHubs(searchQuery);
            setResults(extractedResults);
        } catch (error) {
            console.error("Maps Tool Error:", error);
        } finally {
            setIsSearching(false);
        }
    };

    return {
        searchQuery,
        setSearchQuery,
        isSearching,
        hasSearched,
        results,
        handleFindHub
    };
};
