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
                modelName: "VF9 Eco",
                basePrice: "1.499.000.000 đ",
                plateFee: "1.000.000 đ",
                inspectionFee: "140.000 đ",
                roadFee: "1.560.000 đ",
                insurance: "480.000 đ",
                plateFrame: "350.000 đ",
                serviceFee: "2.000.000 đ",
                totalPrice: "1.504.530.000 đ"
            };
            break;
        case 'plus':
            data = {
                modelName: "VF9 Plus",
                basePrice: "1.699.000.000 đ",
                plateFee: "1.000.000 đ",
                inspectionFee: "140.000 đ",
                roadFee: "1.560.000 đ",
                insurance: "480.000 đ",
                plateFrame: "350.000 đ",
                serviceFee: "2.000.000 đ",
                totalPrice: "1.704.530.000 đ"
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
                    power: "402 hp (300 kW)",
                    torque: "620Nm",
                    drivetrain: "AWD (2 cầu toàn thời gian)",
                    acceleration: "6.5s",
                    topSpeed: "200km/h"
                },
                battery: {
                    type: "Lithium-ion CATL",
                    capacity: "123 kWh (khả dụng)",
                    range: "626km (WLTP)",
                    fastCharge: "35 phút (10-70%)",
                    maxCharge: "150kW",
                    warranty: "10 năm hoặc 200.000km"
                },
                exterior: {
                    dimensions: "5.118 x 2.254 x 1.696 mm",
                    wheelbase: "3.150 mm",
                    groundClearance: "173.7mm",
                    headlights: "LED Matrix",
                    tires: "20 inch",
                    weight: "2.911kg"
                },
                interior: {
                    seating: "7",
                    infotainment: "15.6 inch cảm ứng",
                    audio: "11 loa",
                    ac: "Tự động 3 vùng",
                    seats: "Da cao cấp",
                    sunroof: "Tùy chọn"
                },
                tech: {
                    infosystem: "VinFast Smart Services+",
                    connectivity: "5G, Bluetooth, USB, Wireless CarPlay/Android Auto",
                    camera: "Có",
                    airbags: "11 túi khí",
                    brakes: "ABS, EBD, BA, phanh đĩa 4 bánh thông gió",
                    safety: "ESP, TCS, HSA, ESS, ADAS",
                    features: [
                        "Hệ thống lái tự động cấp độ 2+",
                        "Cảnh báo điểm mù tích hợp",
                        "Hỗ trợ giữ làn đường thông minh",
                        "Kiểm soát hành trình thích ứng",
                        "Hệ thống phanh khẩn cấp tự động",
                        "Giám sát áp suất lốp",
                        "Nhận biết biển báo giao thông",
                        "Trợ lý ảo AI hỗ trợ tiếng Việt"
                    ]
                }
            };
            break;
        case 'plus':
            specs = {
                engine: {
                    type: "Điện 2 motor nâng cấp",
                    power: "402 hp (300 kW)",
                    torque: "620Nm",
                    drivetrain: "AWD (2 cầu toàn thời gian)",
                    acceleration: "6.5s",
                    topSpeed: "200km/h"
                },
                battery: {
                    type: "Lithium-ion CATL cao cấp",
                    capacity: "123 kWh (khả dụng)",
                    range: "602km (WLTP)",
                    fastCharge: "35 phút (10-70%)",
                    maxCharge: "150kW",
                    warranty: "10 năm hoặc 200.000km"
                },
                exterior: {
                    dimensions: "5.118 x 2.254 x 1.696 mm",
                    wheelbase: "3.150 mm",
                    groundClearance: "183.5mm",
                    headlights: "LED Matrix tự động",
                    tires: "21 inch",
                    weight: "2.968kg"
                },
                interior: {
                    seating: "6 hoặc 7",
                    infotainment: "15.6 inch cảm ứng",
                    audio: "13 loa cao cấp",
                    ac: "Tự động 3 vùng",
                    seats: "Da Nappa",
                    sunroof: "Có"
                },
                tech: {
                    infosystem: "VinFast Smart Services+",
                    connectivity: "5G, Bluetooth, USB, Wireless CarPlay/Android Auto",
                    camera: "Camera 360 độ",
                    airbags: "11 túi khí",
                    brakes: "ABS, EBD, BA, phanh đĩa 4 bánh thông gió",
                    safety: "ESP, TCS, HSA, ESS, ADAS",
                    features: [
                        "Hệ thống lái tự động cấp độ 2+",
                        "Cảnh báo điểm mù tích hợp",
                        "Hỗ trợ giữ làn đường thông minh",
                        "Kiểm soát hành trình thích ứng",
                        "Hệ thống phanh khẩn cấp tự động",
                        "Giám sát áp suất lốp",
                        "Nhận biết biển báo giao thông",
                        "Trợ lý ảo AI hỗ trợ tiếng Việt",
                        "Ghế massage hàng trước",
                        "Hệ thống âm thanh cao cấp"
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