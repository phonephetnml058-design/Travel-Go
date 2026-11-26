function searchTour() {
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;
    const people = document.getElementById("people").value;

    if (destination.trim() === "") {
        alert("Vui lòng nhập địa điểm muốn đến!");
        return;
    }

    alert(
        "Thông tin tìm kiếm:\n" +
        "Địa điểm: " + destination + "\n" +
        "Ngày khởi hành: " + (date || "Chưa chọn") + "\n" +
        "Số khách: " + people
    );
}