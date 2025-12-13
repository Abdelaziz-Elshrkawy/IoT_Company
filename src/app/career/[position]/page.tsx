
import {Positions} from "@/helpers/helpers";
import {notFound} from "next/navigation";
import DetailedPositionPage from "@/app/career/[position]/DetailedPositionPage";


export default async function Position({ params }: { params: Promise<{ position: string }> }) {
    const { position } = await params;
    if(!position) return notFound();
    const currentPosition = Positions.find((x) => x.name === decodeURIComponent(position));
    if(!currentPosition) return notFound();

    return <DetailedPositionPage currentPosition={currentPosition} />
}