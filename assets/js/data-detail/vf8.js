// Xử lý
document.querySelectorAll('.model-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.model-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const model = this.dataset.model;
        updateSpecs(model);
        updatePrice(model);
    });
});

// Cập nhật thông số giá lăn bánh
function updatePrice(model) {
    let data;
    switch(model) {
        case 'eco':
            data = {
                modelName: "VF8 Eco",
                basePrice: "1.019.000.000 đ",
                plateFee: "1.000.000 đ",
                inspectionFee: "140.000 đ",
                roadFee: "1.560.000 đ",
                insurance: "480.000 đ",
                plateFrame: "350.000 đ",
                serviceFee: "2.000.000 đ",
                totalPrice: "1.024.530.000 đ"
            };
            break;
        case 'plus':
            data = {
                modelName: "VF8 Plus",
                basePrice: "1.199.000.000 đ",
                plateFee: "1.000.000 đ",
                inspectionFee: "140.000 đ",
                roadFee: "1.560.000 đ",
                insurance: "480.000 đ",
                plateFrame: "350.000 đ",
                serviceFee: "2.000.000 đ",
                totalPrice: "1.204.530.000 đ"
            };
            break;
    }

    // Cập nhật giá lăn bánh
    document.getElementById('model-name').textContent = data.modelName;
    document.getElementById('model-name-main').textContent = data.modelName;
    document.getElementById('base-price').textContent = data.basePrice;
    document.getElementById('base-price-main').textContent = data.basePrice;
    document.getElementById('plate-fee').textContent = data.plateFee;
    document.getElementById('inspection-fee').textContent = data.inspectionFee;
    document.getElementById('road-fee').textContent = data.roadFee;
    document.getElementById('insurance').textContent = data.insurance;
    document.getElementById('plate-frame').textContent = data.plateFrame;
    document.getElementById('service-fee').textContent = data.serviceFee;
    document.getElementById('total-price').innerHTML = `<strong>${data.totalPrice}</strong>`;
}

// Cập nhật thông số theo mẫu xe
function updateSpecs(model) {
    let specs;
    switch(model) {
        case 'eco':
            specs = {
                engine: {
                    type: "Điện 2 motor",
                    power: "150kW (201 hp)",
                    torque: "310Nm",
                    drivetrain: "FWD (Cầu trước)",
                    acceleration: "11.8s",
                    topSpeed: "200km/h"
                },
                battery: {
                    type: "Lithium-ion",
                    capacity: "87.7 kWh",
                    range: "562km (NEDC)",
                    fastCharge: "31 phút (10-70%)",
                    maxCharge: "150kW",
                    warranty: "10 năm hoặc 200.000km"
                },
                exterior: {
                    dimensions: "4.750 x 1.934 x 1.667 mm",
                    wheelbase: "2.950 mm",
                    groundClearance: "362mm",
                    headlights: "LED Matrix",
                    tires: "245/50 R20",
                    weight: "2.328kg"
                },
                interior: {
                    seating: "5",
                    infotainment: "15.6 inch cảm ứng",
                    audio: "10 loa",
                    ac: "Tự động 2 vùng",
                    seats: "Da tổng hợp",
                    sunroof: "Không"
                },
                tech: {
                    infosystem: "VinFast Smart Services",
                    connectivity: "4G, Bluetooth, USB, Wireless CarPlay/Android Auto",
                    camera: "Có",
                    airbags: "10 túi khí",
                    brakes: "ABS, EBD, BA, phanh đĩa 4 bánh",
                    safety: "ESP, TCS, HSA, ESS",
                    features: [
                        "Hệ thống lái tự động cấp độ 2",
                        "Cảnh báo điểm mù",
                        "Hỗ trợ giữ làn đường",
                        "Kiểm soát hành trình",
                        "Giám sát áp suất lốp"
                    ]
                }
            };
            break;
        case 'plus':
            specs = {
                engine: {
                    type: "Điện 2 motor nâng cấp",
                    power: "300kW (402 hp)",
                    torque: "620Nm",
                    drivetrain: "AWD (4 bánh)",
                    acceleration: "5.98s",
                    topSpeed: "200km/h"
                },
                battery: {
                    type: "Lithium-ion cao cấp",
                    capacity: "87.7 kWh",
                    range: "457km (WLTP)",
                    fastCharge: "31 phút (10-70%)",
                    maxCharge: "150kW",
                    warranty: "10 năm hoặc 200.000km"
                },
                exterior: {
                    dimensions: "4.750 x 1.934 x 1.667 mm",
                    wheelbase: "2.950 mm",
                    groundClearance: "315mm",
                    headlights: "LED Matrix tự động",
                    tires: "245/50 R20",
                    weight: "2.520kg"
                },
                interior: {
                    seating: "5",
                    infotainment: "15.6 inch cảm ứng",
                    audio: "10 loa cao cấp",
                    ac: "Tự động 2 vùng",
                    seats: "Da Nappa",
                    sunroof: "Có"
                },
                tech: {
                    infosystem: "VinFast Smart Services+",
                    connectivity: "5G, Bluetooth, USB, Wireless CarPlay/Android Auto",
                    camera: "Camera 360 độ",
                    airbags: "11 túi khí",
                    brakes: "ABS, EBD, BA, phanh đĩa 4 bánh",
                    safety: "ESP, TCS, HSA, ESS, ADAS",
                    features: [
                        "Hệ thống lái tự động cấp độ 2+",
                        "Cảnh báo điểm mù tích hợp",
                        "Hỗ trợ giữ làn đường thông minh",
                        "Kiểm soát hành trình thích ứng",
                        "Hệ thống phanh khẩn cấp tự động",
                        "Giám sát áp suất lốp",
                        "Nhận biết biển báo giao thông"
                    ]
                }
            };
            break;
    }

    // Động cơ
    document.getElementById('engine-type').textContent = specs.engine.type;
    document.getElementById('max-power').textContent = specs.engine.power;
    document.getElementById('max-torque').textContent = specs.engine.torque;
    document.getElementById('drivetrain').textContent = specs.engine.drivetrain;
    document.getElementById('acceleration').textContent = specs.engine.acceleration;
    document.getElementById('top-speed').textContent = specs.engine.topSpeed;

    // Pin
    document.getElementById('battery-type').textContent = specs.battery.type;
    document.getElementById('battery-capacity').textContent = specs.battery.capacity;
    document.getElementById('range').textContent = specs.battery.range;
    document.getElementById('fast-charge').textContent = specs.battery.fastCharge;
    document.getElementById('max-charge-power').textContent = specs.battery.maxCharge;
    document.getElementById('battery-warranty').textContent = specs.battery.warranty;

    // Ngoại thất
    document.getElementById('dimensions').textContent = specs.exterior.dimensions;
    document.getElementById('wheelbase').textContent = specs.exterior.wheelbase;
    document.getElementById('ground-clearance').textContent = specs.exterior.groundClearance;
    document.getElementById('headlights').textContent = specs.exterior.headlights;
    document.getElementById('tires').textContent = specs.exterior.tires;
    document.getElementById('weight').textContent = specs.exterior.weight;

    // Nội thất
    document.getElementById('seating').textContent = specs.interior.seating;
    document.getElementById('infotainment').textContent = specs.interior.infotainment;
    document.getElementById('audio').textContent = specs.interior.audio;
    document.getElementById('ac').textContent = specs.interior.ac;
    document.getElementById('seats').textContent = specs.interior.seats;
    document.getElementById('sunroof').textContent = specs.interior.sunroof;

    // Công nghệ & An toàn
    document.getElementById('infosystem').textContent = specs.tech.infosystem;
    document.getElementById('connectivity').textContent = specs.tech.connectivity;
    document.getElementById('camera').textContent = specs.tech.camera;
    document.getElementById('airbags').textContent = specs.tech.airbags;
    document.getElementById('brakes').textContent = specs.tech.brakes;
    document.getElementById('safety').textContent = specs.tech.safety;

    // Công nghệ nổi bật
    const techFeaturesContainer = document.getElementById('tech-features');
    techFeaturesContainer.innerHTML = '';
    specs.tech.features.forEach(feature => {
        const badge = document.createElement('span');
        badge.className = 'tech-badge';
        badge.textContent = feature;
        techFeaturesContainer.appendChild(badge);
    });
}