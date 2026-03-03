"use client";
import { useGLTF } from "@react-three/drei";

export function Model({ url, ...props }: { url: string;[key: string]: unknown }) {
    const { scene } = useGLTF(url);
    const isAirbus = url.includes("airbus_a380");

    return (
        <primitive
            object={scene}
            rotation={isAirbus ? [0, -Math.PI / 2, 0] : [0, 0, 0]}
            {...props}
        />
    );
}

export const MODELS = {
    AIRBUS_A380: "/partners/airbus_a380.glb",
    BOMBARDIER: "/partners/bombardier_global_7500.glb",
    EMIRATES_A380: "/partners/emirates-a380.glb",
} as const;

Object.values(MODELS).forEach((url) => {
    useGLTF.preload(url);
});
