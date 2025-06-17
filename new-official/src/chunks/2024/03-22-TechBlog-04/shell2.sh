#!/bin/bash
# Gán thuộc tính alias - thay thế các câu lệnh Docker và ứng dụng cho Podman
alias docker=podman 
podman images # Lấy toàn bộ bản ảnh của Podman
podman run -dit ubuntu # Chạy container từ bản ảnh Ubuntu
podman ps # Lấy danh sách container 
podman attach <container_name> # Truy cập vào container