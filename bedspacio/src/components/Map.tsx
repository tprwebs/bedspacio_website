"use state"

export default function Map({ address }: { address: string }) {
    const encodedAddress = encodeURIComponent(address);

    return (
        <div className="flex w-full h-full">
            <iframe
                className="w-full h-full rounded-[10px]"
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps?q=${encodedAddress}&output=embed`}
            />
        </div>
    )
}