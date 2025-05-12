document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const testDriveForm = document.getElementById("drive-form");
    const toastSuccess = document.getElementById("toast-success");
    const toastError = document.getElementById("toast-error");

    function formatDriveDate(formData, format = "dd/mm/yyyy") {
        if (!formData.has("driveDate")) return;

        const rawDate = formData.get("driveDate");
        if (!rawDate) return;

        const date = new Date(rawDate);

        let formatted = rawDate; // fallback nếu sai format

        switch (format) {
            case "dd/mm/yyyy":
                formatted = date.toLocaleDateString("vi-VN", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric"
                });
                break;

            case "long":
                formatted = date.toLocaleDateString("vi-VN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                });
                break;

            case "us":
                formatted = date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit"
                });
                break;
        }

        formData.set("driveDate", formatted);
    }

    function handleSubmit(form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            // submit time
            const submitTimeField = form.querySelector('#time_submit');
            if (submitTimeField) {
                const now = new Date();
                submitTimeField.value = now.toLocaleString('vi-VN'); // Ví dụ: "13/05/2025, 15:30:00"
            }

            const formData = new FormData(form);
            formatDriveDate(formData); // format date

            fetch(form.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            })
                .then(response => {
                    if (response.ok) {
                        form.reset();
                        // close form
                        if (form.id === "drive-form") {
                            closeModal("testDriveForm");

                            showToast(toastSuccess);
                        } else {
                            // Form khác (ví dụ contact-form) → hiện toast ngay
                            showToast(toastSuccess);
                        }
                    } else {
                        showToast(toastError);
                    }
                })
                .catch(error => {
                    console.error("Error:", error);
                    showToast(toastError);
                });
        });
    }

    function showToast(toastElement) {
        toastElement.style.display = "block";
        setTimeout(() => {
            toastElement.style.display = "none";
        }, 5000);
    }

    if (contactForm) handleSubmit(contactForm);
    if (testDriveForm) handleSubmit(testDriveForm);
});
