 <a href="http://nmcntt2-cntn2016.github.io/unnamed">Website: http://nmcntt2-cntn2016.github.io/unnamed</a>
<h1 align="center">TEAM UNNAMED</h1>

<table>
	<tr>
		<th>ID</th>
	    <th>Name</th> 
	  </tr>
	  <tr>
	    <td>1612377</td>
	    <td>Tô Hiếu Minh</td>
	  </tr>
	  <tr>
	    <td>1612418</td>
	    <td>Phạm Lưu Trọng Nghĩa</td>
	  </tr>
	  <tr>
	    <td>1612521</td>
	    <td>Trang Trung Hoàng Phúc</td>
	  </tr>
		 <tr>
	    <td>1612703</td>
	    <td>Nguyễn Thị Tình</td>
	  </tr>
	</table>
	
## SwiftCHEM - Trang web mô tả thí nghiệm hóa học
 <img src="http://i.imgur.com/aFbfcOb.jpg" align="center">
 

 
## Thực trạng :
* Thực trạng, một số trường ở Việt Nam không có đủ cơ sở vật chất cho học sinh làm thí nghiệm.
* Gần đây xảy ra nhiều vụ nổ hóa chất gây thiệt hại về tài sản và tính mạng con người.
* Ở Việt Nam chưa có nhiều giải pháp để giải quyết các vấn đề này.
* Một số app và trang web (ChemLab, phET interactive simulations...) có các tính năng thí nghiệm nhưng khó sử dụng, không trực quan và sử dụng nhiều thuật ngữ chuyên ngành.

## Mục đích :
* Giúp học sinh, sinh viên tiết kiệm thời gian và tăng sự hứng thú khi học hóa, học tập tốt hơn.
* Giúp học sinh, sinh viên tiếp cận, làm quen với thực hành thí nghiệm hoá học, tránh lý thuyết suông.
* Giúp tiết kiệm chi phí xây dựng phòng thí nghiệm, mua các chất hóa học; giảm tai nạn đáng tiếc.

## Tính năng :
* Cung cấp công cụ học tập có các chức năng:
	* Mô tả các hiện tượng, đặc điểm của thí nghiệm một cách trực quan thông qua hình ảnh động / video.
	* Tìm kiếm thông tin của một chất nhất định.
	* Tìm kiếm và tự động cân bằng/ chỉnh sửa hệ số của phương trình được nhập vào.
	* Diễn đàn trao đổi kiến thức.
	* Tìm cách điều chế từ chất này qua chất khác.
	* Phân biệt các chất được nhập vào ( nếu được ).
	
## Cách thực hiện :
* Công nghệ (nếu là web): Các công cụ, thư viện nhóm sẽ sử dụng để làm nền tảng web SwiftCHEM:
	* Front-end:
		* Ngôn ngữ: html/css.
		* Framework: Angular.
		* Library: jQuery AJAX methods, bootstrap, angular material design.
	* Back-end:
		* Ngôn ngữ: Javascript.
		* Platform: Node.js.
		* ORM (Object Relational Mapping): Bookshelf.
		* SQL builder: Knex.
	* Database: MySQL.
* Các thuật toán, cấu trúc dữ liệu sẽ áp dụng:
	* Cân bằng phương trình: Sử dụng thuật Gauss-Jordan và chạy for trong trường hợp thiếu phương trình để tìm ra các nghiệm (hệ số 	của phương trình).
 
## Cách thức hoạt động và phát triển:
* Đăng dự án lên Kickstarter để tìm nguồn kinh phí thuê designer vẽ các ảnh gif để mô tả các phản ứng hóa học, thuê người nhập liệu. Dự đoán dự án sẽ được đưa vào hoạt động sau 3 tháng. Nếu không kiếm đủ tiền để thuê người thì nhóm sẽ tự làm các công việc đó, dự đoán sẽ đưa vào hoạt động sau 8 tháng.
* Sau khi đã hoạt động thì có thêm tính năng để người dùng có thể đóng góp các phản ứng và các hình ảnh thí nghiệm. Sẽ có một đội ngũ chuyên kiểm duyệt nội dung do người dùng đóng góp.
* Tạo một tài khoản ngân hàng để người sử dụng có thể donate được giúp trang web có thể tiếp tục được hoạt động.
* Trang web sẽ hoàn toàn miễn phí và nhắm đến đối tượng người dùng là học sinh (80%) và giáo viên (20%), chủ yếu ở Việt Nam.

 <img src="http://i.imgur.com/QTIHTry.jpg" align="center">
