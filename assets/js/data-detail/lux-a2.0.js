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
        case 'standard':
            data = {
                modelName: "Lux A2.0 Tiêu Chuẩn",
                basePrice: "1.115.120.000 đ",
                plateFee: "1.000.000 đ",
                inspectionFee: "140.000 đ",
                roadFee: "1.560.000 đ",
                insurance: "480.000 đ",
                plateFrame: "350.000 đ",
                serviceFee: "2.000.000 đ",
                totalPrice: "1.120.650.000 đ"
            };
            break;
        case 'advanced':
            data = {
                modelName: "Lux A2.0 Nâng Cao",
                basePrice: "1.206.240.000 đ",
                plateFee: "1.000.000 đ",
                inspectionFee: "140.000 đ",
                roadFee: "1.560.000 đ",
                insurance: "480.000 đ",
                plateFrame: "350.000 đ",
                serviceFee: "2.000.000 đ",
                totalPrice: "1.211.770.000 đ"
            };
            break;
        case 'premium':
            data = {
                modelName: "Lux A2.0 Cao Cấp",
                basePrice: "1.358.554.000 đ",
                plateFee: "1.000.000 đ",
                inspectionFee: "140.000 đ",
                roadFee: "1.560.000 đ",
                insurance: "480.000 đ",
                plateFrame: "350.000 đ",
                serviceFee: "2.000.000 đ",
                totalPrice: "1.364.084.000 đ"
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
        case 'standard':
            specs = {
                engine: {
                    type: "Xăng 2.0L, lọc OHC, phun xăng trực tiếp",
                    power: "174 HP @ 4.500 rpm",
                    torque: "300 Nm @ 1.750 rpm",
                    drivetrain: "Tự động 8 cấp ZF",
                    acceleration: "N/A",
                    topSpeed: "228 km/h"
                },
                exterior: {
                    dimensions: "4.973 x 1.900 x 1.500 mm",
                    wheelbase: "2.968 mm",
                    groundClearance: "150 mm",
                    headlights: "LED tự động",
                    tires: "18 inch",
                    weight: "1.795 kg"
                },
                interior: {
                    seating: "5",
                    infotainment: "10.4 inch cảm ứng",
                    audio: "8 loa",
                    ac: "Tự động 2 vùng",
                    seats: "Da cao cấp",
                    sunroof: "Không"
                },
                tech: {
                    infosystem: "VinFast Smart Services",
                    connectivity: "Bluetooth, USB, Apple CarPlay",
                    camera: "Có",
                    airbags: "6 túi khí",
                    brakes: "ABS, EBD, BA, phanh đĩa 4 bánh",
                    safety: "ESP, TCS, HSA, ESS",
                    features: [
                        "Hệ thống khởi động bằng nút bấm",
                        "Chìa khóa thông minh",
                        "Camera lùi",
                        "Cảm biến đỗ xe",
                        "Kiểm soát hành trình",
                        "Giám sát áp suất lốp",
                        "Tự động khóa cửa khi di chuyển",
                        "Đèn pha LED tự động"
                    ]
                }
            };
            break;
        case 'advanced':
            specs = {
                engine: {
                    type: "Xăng 2.0L, lọc OHC, phun xăng trực tiếp",
                    power: "174 HP @ 4.500 rpm",
                    torque: "300 Nm @ 1.750 rpm",
                    drivetrain: "Tự động 8 cấp ZF",
                    acceleration: "N/A",
                    topSpeed: "228 km/h"
                },
                exterior: {
                    dimensions: "4.973 x 1.900 x 1.500 mm",
                    wheelbase: "2.968 mm",
                    groundClearance: "150 mm",
                    headlights: "LED tự động",
                    tires: "18 inch",
                    weight: "1.795 kg"
                },
                interior: {
                    seating: "5",
                    infotainment: "10.4 inch cảm ứng",
                    audio: "8 loa",
                    ac: "Tự động 2 vùng",
                    seats: "Da cao cấp",
                    sunroof: "Không"
                },
                tech: {
                    infosystem: "VinFast Smart Services",
                    connectivity: "Bluetooth, USB, Apple CarPlay",
                    camera: "Có",
                    airbags: "6 túi khí",
                    brakes: "ABS, EBD, BA, phanh đĩa 4 bánh",
                    safety: "ESP, TCS, HSA, ESS",
                    features: [
                        "Hệ thống khởi động bằng nút bấm",
                        "Chìa khóa thông minh",
                        "Camera lùi",
                        "Cảm biến đỗ xe",
                        "Kiểm soát hành trình",
                        "Giám sát áp suất lốp",
                        "Tự động khóa cửa khi di chuyển",
                        "Đèn pha LED tự động",
                        "Cảnh báo điểm mù"
                    ]
                }
            };
            break;
        case 'premium':
            specs = {
                engine: {
                    type: "Xăng 2.0L, lọc OHC, phun xăng trực tiếp",
                    power: "174 HP @ 4.500 rpm",
                    torque: "300 Nm @ 1.750 rpm",
                    drivetrain: "Tự động 8 cấp ZF",
                    acceleration: "N/A",
                    topSpeed: "228 km/h"
                },
                exterior: {
                    dimensions: "4.973 x 1.900 x 1.500 mm",
                    wheelbase: "2.968 mm",
                    groundClearance: "150 mm",
                    headlights: "LED tự động",
                    tires: "19 inch",
                    weight: "1.795 kg"
                },
                interior: {
                    seating: "5",
                    infotainment: "10.4 inch cảm ứng",
                    audio: "13 loa",
                    ac: "Tự động 2 vùng",
                    seats: "Da Nappa cao cấp",
                    sunroof: "Có"
                },
                tech: {
                    infosystem: "VinFast Smart Services",
                    connectivity: "Bluetooth, USB, Apple CarPlay",
                    camera: "Camera 360 độ",
                    airbags: "6 túi khí",
                    brakes: "ABS, EBD, BA, phanh đĩa 4 bánh",
                    safety: "ESP, TCS, HSA, ESS",
                    features: [
                        "Hệ thống khởi động bằng nút bấm",
                        "Chìa khóa thông minh",
                        "Camera 360 độ",
                        "Cảm biến đỗ xe",
                        "Kiểm soát hành trình",
                        "Giám sát áp suất lốp",
                        "Tự động khóa cửa khi di chuyển",
                        "Đèn pha LED tự động",
                        "Cảnh báo điểm mù"
                    ]
                }
            };
    }
}