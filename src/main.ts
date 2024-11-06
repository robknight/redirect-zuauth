import "./style.css";
import { zuAuthRedirect } from "@pcd/zuauth/client";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div id="app">
    <button id="get-proof">Get proof</button>
  </div>
`;

const urlParams = new URLSearchParams(window.location.search);
const proofFromUrl = urlParams.get("proof");
if (proofFromUrl) {
  console.log("Proof from URL:", proofFromUrl);

  document.getElementById("app")!.innerHTML = `
    <div id="app">
      <p>Proof from URL: ${proofFromUrl}</p>
    </div>
  `;
}


document.getElementById("get-proof")?.addEventListener("click", async () => {
  zuAuthRedirect({
    returnUrl: window.location.href,
    watermark: "1234",
    config: [
      {
        pcdType: "eddsa-ticket-pcd",
        publicKey: [
          "044e711fd3a1792a825aa896104da5276bbe710fd9b59dddea1aaf8d84535aaf",
          "2b259329f0adf98c9b6cf2a11db7225fdcaa4f8796c61864e86154477da10663",
        ],
        eventId: "5074edf5-f079-4099-b036-22223c0c6995",
        eventName: "Devcon: Southeast Asia",
        productId: "220f81f4-ca7b-4e47-bfb7-14bf1aa94a89",
        productName: "General Admission",
      },
      {
        pcdType: "eddsa-ticket-pcd",
        publicKey: [
          "044e711fd3a1792a825aa896104da5276bbe710fd9b59dddea1aaf8d84535aaf",
          "2b259329f0adf98c9b6cf2a11db7225fdcaa4f8796c61864e86154477da10663",
        ],
        eventId: "5074edf5-f079-4099-b036-22223c0c6995",
        eventName: "Devcon: Southeast Asia",
        productId: "f124d21c-84fc-42e4-8f38-234f23412bc8",
        productName: "🏮 Ethereum Lantern",
      },
      {
        pcdType: "eddsa-ticket-pcd",
        publicKey: [
          "044e711fd3a1792a825aa896104da5276bbe710fd9b59dddea1aaf8d84535aaf",
          "2b259329f0adf98c9b6cf2a11db7225fdcaa4f8796c61864e86154477da10663",
        ],
        eventId: "5074edf5-f079-4099-b036-22223c0c6995",
        eventName: "Devcon: Southeast Asia",
        productId: "27bbc1f3-79fe-48a2-b50f-43113ac4ecc5",
        productName: "🦄 Deva Herbal Inhaler",
      },
      {
        pcdType: "eddsa-ticket-pcd",
        publicKey: [
          "044e711fd3a1792a825aa896104da5276bbe710fd9b59dddea1aaf8d84535aaf",
          "2b259329f0adf98c9b6cf2a11db7225fdcaa4f8796c61864e86154477da10663",
        ],
        eventId: "5074edf5-f079-4099-b036-22223c0c6995",
        eventName: "Devcon: Southeast Asia",
        productId: "d56f0781-401c-4b7b-9f05-9da601518b29",
        productName: "👖 Ethereum Pajama Pants",
      },
      {
        pcdType: "eddsa-ticket-pcd",
        publicKey: [
          "044e711fd3a1792a825aa896104da5276bbe710fd9b59dddea1aaf8d84535aaf",
          "2b259329f0adf98c9b6cf2a11db7225fdcaa4f8796c61864e86154477da10663",
        ],
        eventId: "5074edf5-f079-4099-b036-22223c0c6995",
        eventName: "Devcon: Southeast Asia",
        productId: "45b07aad-b4cf-4f0e-861b-683ba3de49bd",
        productName: "Protocol Guild / Merge Pass Holders",
      },
      {
        pcdType: "eddsa-ticket-pcd",
        publicKey: [
          "044e711fd3a1792a825aa896104da5276bbe710fd9b59dddea1aaf8d84535aaf",
          "2b259329f0adf98c9b6cf2a11db7225fdcaa4f8796c61864e86154477da10663",
        ],
        eventId: "5074edf5-f079-4099-b036-22223c0c6995",
        eventName: "Devcon: Southeast Asia",
        productId: "e6df2335-00d5-4ee1-916c-977d326a9049",
        productName: "OSS Contributors",
      },
      {
        pcdType: "eddsa-ticket-pcd",
        publicKey: [
          "044e711fd3a1792a825aa896104da5276bbe710fd9b59dddea1aaf8d84535aaf",
          "2b259329f0adf98c9b6cf2a11db7225fdcaa4f8796c61864e86154477da10663",
        ],
        eventId: "5074edf5-f079-4099-b036-22223c0c6995",
        eventName: "Devcon: Southeast Asia",
        productId: "2ab74a56-4182-4798-a485-6380f87d6299",
        productName: "Solo Stakers",
      },
      {
        pcdType: "eddsa-ticket-pcd",
        publicKey: [
          "044e711fd3a1792a825aa896104da5276bbe710fd9b59dddea1aaf8d84535aaf",
          "2b259329f0adf98c9b6cf2a11db7225fdcaa4f8796c61864e86154477da10663",
        ],
        eventId: "5074edf5-f079-4099-b036-22223c0c6995",
        eventName: "Devcon: Southeast Asia",
        productId: "9fb49dd1-edea-4c57-9ff2-6e6c9c3b4a0a",
        productName: "Public Goods Fundraisers",
      },
      {
        pcdType: "eddsa-ticket-pcd",
        publicKey: [
          "044e711fd3a1792a825aa896104da5276bbe710fd9b59dddea1aaf8d84535aaf",
          "2b259329f0adf98c9b6cf2a11db7225fdcaa4f8796c61864e86154477da10663",
        ],
        eventId: "5074edf5-f079-4099-b036-22223c0c6995",
        eventName: "Devcon: Southeast Asia",
        productId: "1ad9e110-8745-4eed-8ca5-ee5b8cd69c0f",
        productName: "Raffle-Auction Winner",
      },
      {
        pcdType: "eddsa-ticket-pcd",
        publicKey: [
          "044e711fd3a1792a825aa896104da5276bbe710fd9b59dddea1aaf8d84535aaf",
          "2b259329f0adf98c9b6cf2a11db7225fdcaa4f8796c61864e86154477da10663",
        ],
        eventId: "5074edf5-f079-4099-b036-22223c0c6995",
        eventName: "Devcon: Southeast Asia",
        productId: "6b0f70f1-c757-40a1-b6ab-a9ddab221615",
        productName: "Devcon 6 Attendees",
      },
      {
        pcdType: "eddsa-ticket-pcd",
        publicKey: [
          "044e711fd3a1792a825aa896104da5276bbe710fd9b59dddea1aaf8d84535aaf",
          "2b259329f0adf98c9b6cf2a11db7225fdcaa4f8796c61864e86154477da10663",
        ],
        eventId: "5074edf5-f079-4099-b036-22223c0c6995",
        eventName: "Devcon: Southeast Asia",
        productId: "08482abb-8767-47aa-be47-2691032403b6",
        productName: "Complimentary Ticket",
      },
      {
        pcdType: "eddsa-ticket-pcd",
        publicKey: [
          "044e711fd3a1792a825aa896104da5276bbe710fd9b59dddea1aaf8d84535aaf",
          "2b259329f0adf98c9b6cf2a11db7225fdcaa4f8796c61864e86154477da10663",
        ],
        eventId: "5074edf5-f079-4099-b036-22223c0c6995",
        eventName: "Devcon: Southeast Asia",
        productId: "2a86d360-4ca2-43b5-aeb5-9a070da9a992",
        productName: "Local SEA Builder Discount",
      },
      {
        pcdType: "eddsa-ticket-pcd",
        publicKey: [
          "044e711fd3a1792a825aa896104da5276bbe710fd9b59dddea1aaf8d84535aaf",
          "2b259329f0adf98c9b6cf2a11db7225fdcaa4f8796c61864e86154477da10663",
        ],
        eventId: "5074edf5-f079-4099-b036-22223c0c6995",
        eventName: "Devcon: Southeast Asia",
        productId: "c900d46a-99fd-4f7a-8d6b-10d041b2601b",
        productName: "Builder Discount",
      },
      {
        pcdType: "eddsa-ticket-pcd",
        publicKey: [
          "044e711fd3a1792a825aa896104da5276bbe710fd9b59dddea1aaf8d84535aaf",
          "2b259329f0adf98c9b6cf2a11db7225fdcaa4f8796c61864e86154477da10663",
        ],
        eventId: "5074edf5-f079-4099-b036-22223c0c6995",
        eventName: "Devcon: Southeast Asia",
        productId: "3de2fcc5-3822-460c-8175-2eef211d2f1d",
        productName: "Academic Discount",
      },
      {
        pcdType: "eddsa-ticket-pcd",
        publicKey: [
          "044e711fd3a1792a825aa896104da5276bbe710fd9b59dddea1aaf8d84535aaf",
          "2b259329f0adf98c9b6cf2a11db7225fdcaa4f8796c61864e86154477da10663",
        ],
        eventId: "5074edf5-f079-4099-b036-22223c0c6995",
        eventName: "Devcon: Southeast Asia",
        productId: "c97cb25e-302b-4696-ac24-2a7a8255572e",
        productName: "Youth Discount",
      },
      {
        pcdType: "eddsa-ticket-pcd",
        publicKey: [
          "044e711fd3a1792a825aa896104da5276bbe710fd9b59dddea1aaf8d84535aaf",
          "2b259329f0adf98c9b6cf2a11db7225fdcaa4f8796c61864e86154477da10663",
        ],
        eventId: "5074edf5-f079-4099-b036-22223c0c6995",
        eventName: "Devcon: Southeast Asia",
        productId: "695cedfe-a973-4371-acc4-907bde4251c5",
        productName: "Volunteer",
      },
      {
        pcdType: "eddsa-ticket-pcd",
        publicKey: [
          "044e711fd3a1792a825aa896104da5276bbe710fd9b59dddea1aaf8d84535aaf",
          "2b259329f0adf98c9b6cf2a11db7225fdcaa4f8796c61864e86154477da10663",
        ],
        eventId: "5074edf5-f079-4099-b036-22223c0c6995",
        eventName: "Devcon: Southeast Asia",
        productId: "41a055e0-db9c-41ff-8e9c-5834c9d64c6d",
        productName: "Press",
      },
      {
        pcdType: "eddsa-ticket-pcd",
        publicKey: [
          "044e711fd3a1792a825aa896104da5276bbe710fd9b59dddea1aaf8d84535aaf",
          "2b259329f0adf98c9b6cf2a11db7225fdcaa4f8796c61864e86154477da10663",
        ],
        eventId: "5074edf5-f079-4099-b036-22223c0c6995",
        eventName: "Devcon: Southeast Asia",
        productId: "b50febf2-a258-4ee6-b3e4-2b2c2e57a74e",
        productName: "Supporter",
      },
      {
        pcdType: "eddsa-ticket-pcd",
        publicKey: [
          "044e711fd3a1792a825aa896104da5276bbe710fd9b59dddea1aaf8d84535aaf",
          "2b259329f0adf98c9b6cf2a11db7225fdcaa4f8796c61864e86154477da10663",
        ],
        eventId: "5074edf5-f079-4099-b036-22223c0c6995",
        eventName: "Devcon: Southeast Asia",
        productId: "f15237ec-abd9-40ae-8e61-9cf8a7a60c3f",
        productName: "EFer",
      },
      {
        pcdType: "eddsa-ticket-pcd",
        publicKey: [
          "044e711fd3a1792a825aa896104da5276bbe710fd9b59dddea1aaf8d84535aaf",
          "2b259329f0adf98c9b6cf2a11db7225fdcaa4f8796c61864e86154477da10663",
        ],
        eventId: "5074edf5-f079-4099-b036-22223c0c6995",
        eventName: "Devcon: Southeast Asia",
        productId: "a4c658af-0b37-41ac-aa0a-850b6b7741be",
        productName: "EF Guests",
      },
      {
        pcdType: "eddsa-ticket-pcd",
        publicKey: [
          "044e711fd3a1792a825aa896104da5276bbe710fd9b59dddea1aaf8d84535aaf",
          "2b259329f0adf98c9b6cf2a11db7225fdcaa4f8796c61864e86154477da10663",
        ],
        eventId: "5074edf5-f079-4099-b036-22223c0c6995",
        eventName: "Devcon: Southeast Asia",
        productId: "c64cac28-5719-4260-bd9a-ea0c0cb04d54",
        productName: "Speakers",
      },
      {
        pcdType: "eddsa-ticket-pcd",
        publicKey: [
          "044e711fd3a1792a825aa896104da5276bbe710fd9b59dddea1aaf8d84535aaf",
          "2b259329f0adf98c9b6cf2a11db7225fdcaa4f8796c61864e86154477da10663",
        ],
        eventId: "5074edf5-f079-4099-b036-22223c0c6995",
        eventName: "Devcon: Southeast Asia",
        productId: "bc67b24b-52e1-418e-832a-568d1ae5a58c",
        productName: "POAP Holder Discount",
      },
      {
        pcdType: "eddsa-ticket-pcd",
        publicKey: [
          "044e711fd3a1792a825aa896104da5276bbe710fd9b59dddea1aaf8d84535aaf",
          "2b259329f0adf98c9b6cf2a11db7225fdcaa4f8796c61864e86154477da10663",
        ],
        eventId: "5074edf5-f079-4099-b036-22223c0c6995",
        eventName: "Devcon: Southeast Asia",
        productId: "b44cac2f-92b5-405e-9aa1-7127661790e2",
        productName: "DAO Governance Participants",
      },
      {
        pcdType: "eddsa-ticket-pcd",
        publicKey: [
          "044e711fd3a1792a825aa896104da5276bbe710fd9b59dddea1aaf8d84535aaf",
          "2b259329f0adf98c9b6cf2a11db7225fdcaa4f8796c61864e86154477da10663",
        ],
        eventId: "5074edf5-f079-4099-b036-22223c0c6995",
        eventName: "Devcon: Southeast Asia",
        productId: "81620f49-d7fc-4ccb-a7bb-0ad81d97191a",
        productName: "Indian Resident (AnonAadhaar) Builder",
      },
      {
        pcdType: "eddsa-ticket-pcd",
        publicKey: [
          "044e711fd3a1792a825aa896104da5276bbe710fd9b59dddea1aaf8d84535aaf",
          "2b259329f0adf98c9b6cf2a11db7225fdcaa4f8796c61864e86154477da10663",
        ],
        eventId: "5074edf5-f079-4099-b036-22223c0c6995",
        eventName: "Devcon: Southeast Asia",
        productId: "1bbc0ec1-5be9-43ff-acd3-d4ca794f814f",
        productName: "zkPassport Local Builder",
      },
      {
        pcdType: "eddsa-ticket-pcd",
        publicKey: [
          "044e711fd3a1792a825aa896104da5276bbe710fd9b59dddea1aaf8d84535aaf",
          "2b259329f0adf98c9b6cf2a11db7225fdcaa4f8796c61864e86154477da10663",
        ],
        eventId: "5074edf5-f079-4099-b036-22223c0c6995",
        eventName: "Devcon: Southeast Asia",
        productId: "696ef282-b538-4ccc-b819-74a96be13582",
        productName: '👕 T-Shirt: "Permissionless Innovation Reunion Tour"',
      },
      {
        pcdType: "eddsa-ticket-pcd",
        publicKey: [
          "044e711fd3a1792a825aa896104da5276bbe710fd9b59dddea1aaf8d84535aaf",
          "2b259329f0adf98c9b6cf2a11db7225fdcaa4f8796c61864e86154477da10663",
        ],
        eventId: "5074edf5-f079-4099-b036-22223c0c6995",
        eventName: "Devcon: Southeast Asia",
        productId: "a374ebe8-8d2d-46b2-a582-525aca266e80",
        productName: '⛈️ Rain Coat: "Make Ethereum Cypherpunk"',
      },
      {
        pcdType: "eddsa-ticket-pcd",
        publicKey: [
          "044e711fd3a1792a825aa896104da5276bbe710fd9b59dddea1aaf8d84535aaf",
          "2b259329f0adf98c9b6cf2a11db7225fdcaa4f8796c61864e86154477da10663",
        ],
        eventId: "5074edf5-f079-4099-b036-22223c0c6995",
        eventName: "Devcon: Southeast Asia",
        productId: "3c30c8e0-4f96-4b46-b2c9-72954e31ab51",
        productName: "Reserve",
      },
      {
        pcdType: "eddsa-ticket-pcd",
        publicKey: [
          "044e711fd3a1792a825aa896104da5276bbe710fd9b59dddea1aaf8d84535aaf",
          "2b259329f0adf98c9b6cf2a11db7225fdcaa4f8796c61864e86154477da10663",
        ],
        eventId: "5074edf5-f079-4099-b036-22223c0c6995",
        eventName: "Devcon: Southeast Asia",
        productId: "f4f14100-f816-4e2e-a770-78dacaee4e2f",
        productName: "Grant Recipients",
      },
      {
        pcdType: "eddsa-ticket-pcd",
        publicKey: [
          "044e711fd3a1792a825aa896104da5276bbe710fd9b59dddea1aaf8d84535aaf",
          "2b259329f0adf98c9b6cf2a11db7225fdcaa4f8796c61864e86154477da10663",
        ],
        eventId: "5074edf5-f079-4099-b036-22223c0c6995",
        eventName: "Devcon: Southeast Asia",
        productId: "5dcea12b-5862-404f-8943-2fbb35322e4e",
        productName: "Community Reserve",
      },
      {
        pcdType: "eddsa-ticket-pcd",
        publicKey: [
          "044e711fd3a1792a825aa896104da5276bbe710fd9b59dddea1aaf8d84535aaf",
          "2b259329f0adf98c9b6cf2a11db7225fdcaa4f8796c61864e86154477da10663",
        ],
        eventId: "5074edf5-f079-4099-b036-22223c0c6995",
        eventName: "Devcon: Southeast Asia",
        productId: "c751e137-bb3c-44f3-94c2-f81f0bc00276",
        productName: "Devcon Scholar",
      },
      {
        pcdType: "eddsa-ticket-pcd",
        publicKey: [
          "044e711fd3a1792a825aa896104da5276bbe710fd9b59dddea1aaf8d84535aaf",
          "2b259329f0adf98c9b6cf2a11db7225fdcaa4f8796c61864e86154477da10663",
        ],
        eventId: "5074edf5-f079-4099-b036-22223c0c6995",
        eventName: "Devcon: Southeast Asia",
        productId: "8725de16-8edc-4c13-aeaa-1819aee98aeb",
        productName: "Day 2 Pass (Nov. 13)",
      },
      {
        pcdType: "eddsa-ticket-pcd",
        publicKey: [
          "044e711fd3a1792a825aa896104da5276bbe710fd9b59dddea1aaf8d84535aaf",
          "2b259329f0adf98c9b6cf2a11db7225fdcaa4f8796c61864e86154477da10663",
        ],
        eventId: "5074edf5-f079-4099-b036-22223c0c6995",
        eventName: "Devcon: Southeast Asia",
        productId: "7a88209f-3248-4a53-b568-bb6861e60506",
        productName: "Day 3 Pass (Nov. 14)",
      },
      {
        pcdType: "eddsa-ticket-pcd",
        publicKey: [
          "044e711fd3a1792a825aa896104da5276bbe710fd9b59dddea1aaf8d84535aaf",
          "2b259329f0adf98c9b6cf2a11db7225fdcaa4f8796c61864e86154477da10663",
        ],
        eventId: "5074edf5-f079-4099-b036-22223c0c6995",
        eventName: "Devcon: Southeast Asia",
        productId: "7d4f5da2-9d5f-46ab-a28f-7cf38e016281",
        productName: "Day 4 Pass (Nov. 15)",
      },
    ],
    fieldsToReveal: {
      revealAttendeeEmail: true,
      revealEventId: true,
      revealProductId: true,
    },
  });
});
