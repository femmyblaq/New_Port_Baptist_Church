import React from 'react'

export default function Hfc() {
    const sample = [
{
id: 1,
name: "Head Office",
branch: "Lagos Branch",
addressLines: ["12 Freedom Way", "Victoria Island", "Lagos, Nigeria"],
phone: "+234 800 000 0001",
email: "lagos@company.com",
img: "https://source.unsplash.com/600x400/?map,location",
},
{
id: 2,
name: "Regional Office",
branch: "Abuja Branch",
addressLines: ["45 Unity Road", "Central Business District", "Abuja, Nigeria"],
phone: "+234 800 000 0002",
email: "abuja@company.com",
img: "https://source.unsplash.com/600x400/?gps,location",
},
{
id: 3,
name: "Warehouse",
branch: "Port Harcourt Branch",
addressLines: ["8 Harbour Lane", "Riverside", "Port Harcourt, Nigeria"],
phone: "+234 800 000 0003",
email: "ph@company.com",
img: "https://source.unsplash.com/600x400/?pin,map",
},
];
  return (
    <div className="container py-3">
<div className="row gy-3">
{data.map((b, i) => {
const color = borderClasses[i % borderClasses.length];
return (
<div key={b.id || i} className="col-12">
<div className={`card border-${color} border-3 shadow-sm`}>
<div className="row g-0 align-items-center">
{/* left: text content */}
<div className="col-md-8 p-3">
<h5 className="card-title mb-1">{b.name}</h5>
<p className="mb-1 text-muted small">{b.branch}</p>


<address className="mb-2">
{b.addressLines &&
b.addressLines.map((line, idx) => (
<div key={idx}>{line}</div>
))}
</address>


<div className="d-flex flex-wrap gap-3 small">
{b.phone && (
<div>
<strong>Phone: </strong>
<a href={`tel:${b.phone}`}>{b.phone}</a>
</div>
)}
{b.email && (
<div>
<strong>Email: </strong>
<a href={`mailto:${b.email}`}>{b.email}</a>
</div>
)}
</div>
</div>


{/* right: image */}
<div className="col-md-4 d-none d-md-block">
<img
src={b.img}
alt={`Location for ${b.branch}`}
className="img-fluid rounded-end"
style={{ height: "100%", objectFit: "cover", width: "100%" }}
/>
</div>
</div>


{/* responsive image for small screens */}
<div className="d-md-none">
<img
src={b.img}
alt={`Location for ${b.branch}`}
className="img-fluid w-100"
style={{ objectFit: "cover", maxHeight: 220 }}
/>
</div>
</div>
</div>
);
})}
</div>
</div>
  )
}
