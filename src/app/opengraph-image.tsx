import { ImageResponse } from "next/og";

export const runtime = "edge";

export const contentType = "image/png";

export default async function OpenGraphImage() {
	const outfitSemiBold = fetch(
		new URL("./Outfit-SemiBold.ttf", import.meta.url),
	).then((res) => res.arrayBuffer());

	const Image = new ImageResponse(
		(
			<div
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "#EC1C24",
					fontSize: 32,
					fontWeight: 600,
				}}
			>
				<img
					src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/images/logo-white.svg`}
				/>
				<div style={{ marginTop: 40, color: "#fff" }}>
					Ejik News and Stories
				</div>
			</div>
		),
		{
			width: 1200,
			height: 630,
			fonts: [
				{
					name: "Outfit",
					data: await outfitSemiBold,
					style: "normal",
					weight: 400,
				},
			],
		},
	);
	return Image;
}
