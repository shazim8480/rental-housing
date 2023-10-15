export const propertyData = {
  title: "Modern Villa with Ocean View",
  description:
    "A luxurious and spacious villa with breathtaking views of the ocean. Perfect for a relaxing getaway.",
  images: [
    {
      src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2970&q=80",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1661964475795-f0cb85767a88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1661913412680-c274b6fea096?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3131&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1551524164-687a55dd1126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3125&q=80",
    },
  ],
  pricing: {
    monthly: 12000,
  },
  availability: {
    available: true,
    dates: ["2023-11-01", "2023-11-15", "2023-12-05"],
  },
  location: {
    streetAddress: "123 Oceanfront Drive, Seaside Town",
    district: "Seaside District",
    division: "Coastal Division",
    zipCode: "12345",
  },
  contact: {
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
  },
  reviews: [
    {
      user: "Alice",
      rating: 4.5,
      comment: "Wonderful place with amazing views!",
    },
    {
      user: "Bob",
      rating: 5,
      comment: "Spacious and clean. Loved every moment of our stay.",
    },
  ],
  additionalDetails: {
    size: "1200 sqft.",
    bedrooms: 4,
    bathrooms: 3,
    amenities: ["Private Pool", "Free Parking", "WiFi", "Air Conditioning"],
  },
  units: [
    { name: "A-1", available: false },
    { name: "A-2", available: true },
    { name: "B-1", available: true },
    { name: "B-2", available: true },
    { name: "C-1", available: true },
    { name: "C-2", available: false },
    { name: "D-1", available: true },
    { name: "D-2", available: true },
  ],
};

// You can now use the 'propertyData' object in your JavaScript code.
// console.log(propertyData);
