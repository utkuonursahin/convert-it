import React from 'react';
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import NumberTicker from "@/components/magicui/number-ticker";

type FeatureCardProps = {
    title: string;
    count: number;
};

export default function FeatureCard({title, count} : FeatureCardProps){
    return (
        <Card className="flex flex-col w-52 h-52 items-center justify-center p-4 bg-transparent text-primary-foreground border-none ring-2 ring-green-400/25
        animate-opacity-delay">
            <CardContent className="p-0">
                <p className="whitespace-pre-wrap text-6xl font-medium tracking-tighter">
                    <NumberTicker value={count} delay={1.75}/>
                </p>
            </CardContent>
            <CardFooter className="p-0 text-primary text-lg text-center">
                {title}
            </CardFooter>
        </Card>
    );
};

FeatureCard.Container = function FeatureCardContainer({children} : {children: React.ReactNode}) {
    return (
        <div className="flex gap-12">
            {children}
        </div>
    )
}