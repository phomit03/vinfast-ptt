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
                modelName: "VF6 Eco",
                basePrice: "689.000.000 đ",
                plateFee: "1.000.000 đ",
                inspectionFee: "140.000 đ",
                roadFee: "1.560.000 đ",
                insurance: "480.000 đ",
                plateFrame: "350.000 đ",
                serviceFee: "2.000.000 đ",
                totalPrice: "694.530.000 đ"
            };
            break;
        case 'plus':
            data = {
                modelName: "VF6 Plus",
                basePrice: "749.000.000 đ",
                plateFee: "1.000.000 đ",
                inspectionFee: "140.000 đ",
                roadFee: "1.560.000 đ",
                insurance: "480.000 đ",
                plateFrame: "350.000 đ",
                serviceFee: "2.000.000 đ",
                totalPrice: "754.530.000 đ"
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
                    type: "Điện",
                    power: "130kW",
                    torque: "250Nm",
                    drivetrain: "FWD (Cầu trước)",
                    drivingMode: "Eco/Normal/Sport",
                    topSpeed: "180km/h"
                },
                battery: {
                    type: "Lithium-ion",
                    capacity: "59.6 kWh",
                    range: "480km (NEDC)",
                    fastCharge: "25 phút (10-70%)",
                    homeCharge: "7.4kW (AFS)",
                    warranty: "10 năm hoặc 200.000km"
                },
                exterior: {
                    dimensions: "4.241 x 1.834 x 1.580 mm",
                    wheelbase: "2.730 mm",
                    groundClearance: "170mm",
                    headlights: "LED",
                    tires: "17 inch",
                    mirrors: "Chỉnh điện, tích hợp đèn báo rẽ"
                },
                interior: {
                    seating: "5",
                    infotainment: "12.9 inch cảm ứng",
                    audio: "6 loa",
                    ac: "Tự động 1 vùng",
                    seats: "Vải",
                    steeringWheel: "Nhựa"
                },
                tech: {
                    infosystem: "VinFast Smart Services",
                    connectivity: "Android Auto, Apple CarPlay",
                    camera: "Có",
                    airbags: "4 túi khí",
                    brakes: "ABS, EBD, BA",
                    safety: "ESC, TCS, HSA",
                    features: [
                        "Cảnh báo điểm mù",
                        "Giám sát áp suất lốp",
                        "Hỗ trợ khởi hành ngang dốc",
                        "Camera lùi"
                    ]
                }
            };
            break;
        case 'plus':
            specs = {
                engine: {
                    type: "Điện",
                    power: "150kW",
                    torque: "310Nm",
                    drivetrain: "FWD (Cầu trước)",
                    drivingMode: "Eco/Normal/Sport",
                    topSpeed: "180km/h"
                },
                battery: {
                    type: "Lithium-ion",
                    capacity: "59.6 kWh",
                    range: "460km (NEDC)",
                    fastCharge: "25 phút (10-70%)",
                    homeCharge: "7.4kW (AFS)",
                    warranty: "10 năm hoặc 200.000km"
                },
                exterior: {
                    dimensions: "4.241 x 1.834 x 1.580 mm",
                    wheelbase: "2.730 mm",
                    groundClearance: "170mm",
                    headlights: "LED tự động",
                    tires: "19 inch",
                    mirrors: "Chỉnh điện, gập điện, sấy gương"
                },
                interior: {
                    seating: "5",
                    infotainment: "12.9 inch cảm ứng",
                    audio: "6 loa",
                    ac: "Tự động 2 vùng",
                    seats: "Da nhân tạo",
                    steeringWheel: "Da nhân tạo"
                },
                tech: {
                    infosystem: "VinFast Smart Services",
                    connectivity: "Android Auto, Apple CarPlay",
                    camera: "Camera 360 độ",
                    airbags: "8 túi khí",
                    brakes: "ABS, EBD, BA",
                    safety: "ESC, TCS, HSA",
                    features: [
                        "Cảnh báo điểm mù",
                        "Giám sát áp suất lốp",
                        "Hỗ trợ khởi hành ngang dốc",
                        "Camera 360 độ",
                        "Cảnh báo phương tiện cắt ngang",
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
    document.getElementById('driving-mode').textContent = specs.engine.drivingMode;
    document.getElementById('top-speed').textContent = specs.engine.topSpeed;

    // Pin
    document.getElementById('battery-type').textContent = specs.battery.type;
    document.getElementById('battery-capacity').textContent = specs.battery.capacity;
    document.getElementById('range').textContent = specs.battery.range;
    document.getElementById('fast-charge').textContent = specs.battery.fastCharge;
    document.getElementById('home-charge').textContent = specs.battery.homeCharge;
    document.getElementById('battery-warranty').textContent = specs.battery.warranty;

    // Ngoại thất
    document.getElementById('dimensions').textContent = specs.exterior.dimensions;
    document.getElementById('wheelbase').textContent = specs.exterior.wheelbase;
    document.getElementById('ground-clearance').textContent = specs.exterior.groundClearance;
    document.getElementById('headlights').textContent = specs.exterior.headlights;
    document.getElementById('tires').textContent = specs.exterior.tires;
    document.getElementById('mirrors').textContent = specs.exterior.mirrors;

    // Nội thất
    document.getElementById('seating').textContent = specs.interior.seating;
    document.getElementById('infotainment').textContent = specs.interior.infotainment;
    document.getElementById('audio').textContent = specs.interior.audio;
    document.getElementById('ac').textContent = specs.interior.ac;
    document.getElementById('seats').textContent = specs.interior.seats;
    document.getElementById('steering-wheel').textContent = specs.interior.steeringWheel;

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