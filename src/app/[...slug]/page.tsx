"use client";

import React, {
  ElementType,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react";
import ReactHtmlParser from "html-react-parser";
import { load } from "cheerio";
import TableOfContent, { IContentItem } from "../components/table-of-content";
import Breadcrumb from "../components/breadcrumb";
import BlogItem from "@/containers/Blog/BlogItem";
import Link from "next/link";

const data = `
<h2 dir="ltr">Ph&acirc;n loại kh&aacute;ch h&agrave;ng l&agrave; g&igrave;?</h2>
<p dir="ltr">Ph&acirc;n loại kh&aacute;ch h&agrave;ng l&agrave; chiến lược ph&acirc;n chia nhỏ kh&aacute;ch h&agrave;ng của một doanh nghiệp th&agrave;nh những nh&oacute;m kh&aacute;c nhau. Những nh&oacute;m kh&aacute;ch h&agrave;ng n&agrave;y c&oacute; những đặc điểm ri&ecirc;ng như độ tuổi, c&aacute;ch mua h&agrave;ng, thu nhập, giới t&iacute;nh, h&agrave;nh vi mua h&agrave;ng&hellip;</p>
<figure class="image"><img title="phan-loai-khach-hang.webp" src="https://gofiber.b-cdn.net/Admin/phan-loai-khach-hang.webp" alt="Doanh nghiệp cần ph&acirc;n loại kh&aacute;ch h&agrave;ng" width="800" height="571">
<figcaption>Doanh nghiệp cần ph&acirc;n loại kh&aacute;ch h&agrave;ng</figcaption>
</figure>
<h2 dir="ltr">Lợi &iacute;ch khi doanh nghiệp thực hiện ph&acirc;n loại kh&aacute;ch h&agrave;ng</h2>
<p dir="ltr">Bất kỳ doanh nghiệp n&agrave;o đang kinh doanh đều cần thực hiện ph&acirc;n loại kh&aacute;ch h&agrave;ng v&igrave; n&oacute; c&oacute; v&ocirc; v&agrave;n lợi &iacute;ch, nhất l&agrave; trong b&aacute;n h&agrave;ng. Một số thuận lợi m&agrave; doanh nghiệp nhận được khi ph&acirc;n loại những kh&aacute;ch h&agrave;ng của m&igrave;nh bao gồm:</p>
<ul>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation">Đ&aacute;p ứng nhu cầu mua h&agrave;ng của từng đối tượng cụ thể, trải nghiệm kh&aacute;ch h&agrave;ng được c&aacute; nh&acirc;n h&oacute;a.</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation">Tối ưu c&aacute;c khoản chi ph&iacute; kh&ocirc;ng cần thiết v&agrave; thời gian chăm s&oacute;c kh&aacute;ch h&agrave;ng.</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation">Tiếp cận kh&aacute;ch h&agrave;ng dễ d&agrave;ng hơn nhờ x&aacute;c định được khu vực kh&aacute;ch đang sinh sống.</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation">Hỗ trợ việc quản l&yacute; th&ocirc;ng tin kh&aacute;ch h&agrave;ng hiệu quả.</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation">Tối ưu h&oacute;a chiến lược tiếp thị để tiếp cận mục ti&ecirc;u, lựa chọn k&ecirc;nh tiếp thị hợp l&yacute; hơn.</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation">X&acirc;y dựng mối quan hệ kh&aacute;ch h&agrave;ng bền vững.</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation">Tăng chất lượng sản phẩm, dịch vụ của doanh nghiệp nhờ v&agrave;o nhu cầu mua h&agrave;ng của kh&aacute;ch h&agrave;ng.</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation">Tạo điều kiện cho đội ngũ chăm s&oacute;c kh&aacute;ch h&agrave;ng đưa ra sản phẩm ph&ugrave; hợp cho người ti&ecirc;u d&ugrave;ng</p>
</li>
</ul>
<p dir="ltr">N&oacute;i t&oacute;m lại, việc ph&acirc;n loại danh s&aacute;ch kh&aacute;ch h&agrave;ng gi&uacute;p h&igrave;nh th&agrave;nh sự th&agrave;nh c&ocirc;ng trong kế hoạch marketing của doanh nghiệp.</p>
<figure class="image"><img title="loi-ich-khi-phan-loai-khach-hang.webp" src="https://gofiber.b-cdn.net/Admin/loi-ich-khi-phan-loai-khach-hang.webp" alt="Doanh nghiệp nhận được nhiều lợi &iacute;ch khi ph&acirc;n loại nh&oacute;m kh&aacute;ch h&agrave;ng" width="800" height="571">
<figcaption>Doanh nghiệp nhận được nhiều lợi &iacute;ch khi ph&acirc;n loại nh&oacute;m kh&aacute;ch h&agrave;ng</figcaption>
</figure>
<h2 dir="ltr">7 c&aacute;ch ph&acirc;n nh&oacute;m kh&aacute;ch h&agrave;ng hiệu quả cho doanh nghiệp</h2>
<p dir="ltr">Khi sự cạnh tranh tr&ecirc;n thị trường đang ng&agrave;y c&agrave;ng cao, nhu cầu của kh&aacute;ch h&agrave;ng c&oacute; sự thay đổi. Ch&iacute;nh v&igrave; thế, doanh nghiệp cần đưa ra phương hướng ph&acirc;n loại hợp l&yacute;, dưới đ&acirc;y l&agrave; 7 c&aacute;ch ph&acirc;n chia kh&aacute;ch h&agrave;ng phổ biến đang được &aacute;p dụng trong nhiều trong doanh nghiệp nhất hiện nay:</p>
<h3 dir="ltr">#1. Ph&acirc;n loại theo t&acirc;m l&yacute; mua h&agrave;ng</h3>
<p dir="ltr">T&acirc;m l&yacute; mua h&agrave;ng của mỗi kh&aacute;ch h&agrave;ng đều kh&aacute;c nhau, nhưng th&ocirc;ng thường doanh nghiệp c&oacute; thể chia người ti&ecirc;u d&ugrave;ng của m&igrave;nh th&agrave;nh c&aacute;c nh&oacute;m dựa v&agrave;o t&acirc;m l&yacute; mua h&agrave;ng như:</p>
<ul>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><strong>Ph&acirc;n loại theo sự ưa chuộng h&igrave;nh thức: </strong>l&agrave; nh&oacute;m kh&aacute;ch h&agrave;ng quan t&acirc;m đến h&igrave;nh thức sản phẩm như bao b&igrave;, c&aacute;ch truyền tải của doanh nghiệp.</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><strong>Nh&oacute;m y&ecirc;u th&iacute;ch c&aacute;c ch&iacute;nh s&aacute;ch khuyến m&atilde;i: </strong>đ&acirc;y l&agrave; nh&oacute;m kh&aacute;ch h&agrave;ng c&oacute; thể kh&ocirc;ng mang lại nhiều lợi nhuận cho doanh nghiệp nhưng họ c&oacute; thể &ldquo;giải quyết&rdquo; những sản phẩm tồn kho, &iacute;t b&aacute;n được. Nh&oacute;m kh&aacute;ch h&agrave;ng n&agrave;y chỉ quan t&acirc;m đến gi&aacute; cả v&agrave; c&aacute;c dịch vụ khuyến m&atilde;i của sản phẩm.</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><strong>Nh&oacute;m chỉ quan t&acirc;m đến dịch vụ chăm s&oacute;c kh&aacute;ch h&agrave;ng: </strong>nh&oacute;m kh&aacute;ch h&agrave;ng n&agrave;y thường &ldquo;kh&oacute; chiều&rdquo; nhưng chỉ cần doanh nghiệp nắm được t&acirc;m l&yacute; mua h&agrave;ng của họ th&igrave; việc tư vấn v&agrave; &ldquo;chốt đơn&rdquo; sẽ kh&ocirc;ng mấy kh&oacute; khăn, thậm ch&iacute; lợi &iacute;ch cho doanh nghiệp c&oacute; thể lớn hơn so với những nh&oacute;m kh&aacute;ch h&agrave;ng kh&aacute;c.</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><strong>Nh&oacute;m th&iacute;ch trải nghiệm những sản phẩm mới: </strong>đ&acirc;y l&agrave; nh&oacute;m kh&aacute;ch h&agrave;ng chỉ quan t&acirc;m l&agrave;m c&aacute;ch n&agrave;o để &ldquo;chạy theo xu hướng&rdquo; một c&aacute;ch tốt nhất. Doanh nghiệp cần khai th&aacute;c nh&oacute;m kh&aacute;ch h&agrave;ng n&agrave;y thật hiệu quả v&igrave; họ cũng mang lại lượng doanh thu cao (c&oacute; thể kh&ocirc;ng được l&acirc;u d&agrave;i).</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><strong>T&acirc;m l&yacute; mua h&agrave;ng v&igrave; chất lượng:</strong> những kh&aacute;ch h&agrave;ng mua sản phẩm, dịch vụ v&igrave; học thực sự quan t&acirc;m đến chất lượng sản phẩm đang gia tăng do thu nhập đang ng&agrave;y một tăng. Nếu bạn c&oacute; thể đ&aacute;p ứng được nhu cầu của nh&oacute;m kh&aacute;ch h&agrave;ng n&agrave;y, cơ hội để doanh nghiệp c&oacute; lượng kh&aacute;ch h&agrave;ng trung th&agrave;nh rất cao.</p>
<figure class="image"><img title="tam-ly-phan-loai-khach-hang.webp" src="https://gofiber.b-cdn.net/Admin/tam-ly-phan-loai-khach-hang.webp" alt="Ph&acirc;n loại dựa v&agrave;o t&acirc;m l&yacute; mua h&agrave;ng" width="800" height="571">
<figcaption>Ph&acirc;n loại dựa v&agrave;o t&acirc;m l&yacute; mua h&agrave;ng</figcaption>
</figure>
</li>
</ul>
<h3 dir="ltr">#2. Ph&acirc;n loại dựa v&agrave;o độ tuổi</h3>
<p dir="ltr">Độ tuổi của người mua h&agrave;ng c&oacute; thể ảnh hưởng đến t&acirc;m l&yacute; v&agrave; nhu cầu thực tế về sản phẩm. Doanh nghiệp c&oacute; thể ph&acirc;n loại dựa theo độ tuổi như:</p>
<ul>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><strong>Nh&oacute;m kh&aacute;ch h&agrave;ng dưới 15 tuổi: </strong>nh&oacute;m kh&aacute;ch h&agrave;ng n&agrave;y thường kh&ocirc;ng c&oacute; khả năng tự lực t&agrave;i ch&iacute;nh, thậm ch&iacute; l&agrave; tự quyết định mua h&agrave;ng. Nhu cầu của họ thường được đ&aacute;p ứng th&ocirc;ng qua người đại diện.</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><strong>Nh&oacute;m độ tuổi từ 15 - 22:</strong> nh&oacute;m kh&aacute;ch h&agrave;ng n&agrave;y thường &ldquo;chốt đơn&rdquo; kh&aacute; nhanh v&igrave; người trẻ kh&aacute; th&iacute;ch trải nghiệm sản phẩm n&ecirc;n y&ecirc;u cầu về sản phẩm, dịch vụ c&oacute; thể kh&ocirc;ng lớn. Doanh nghiệp cần đảm bảo sản phẩm đ&aacute;p ứng nh&oacute;m kh&aacute;ch h&agrave;ng n&agrave;y cần c&oacute; h&igrave;nh ảnh mới mẻ v&agrave; gi&aacute; cả ổn định v&igrave; một phần t&agrave;i ch&iacute;nh của họ c&ograve;n phụ thuộc v&agrave;o gia đ&igrave;nh.</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><strong>Nh&oacute;m tuổi từ 22- 50: </strong>nh&oacute;m kh&aacute;ch h&agrave;ng n&agrave;y thường c&oacute; kiến thức v&agrave; t&agrave;i ch&iacute;nh nhất định n&ecirc;n chỉ hướng đến những sản phẩm cần thiết. Họ chủ yếu quan t&acirc;m đến c&aacute;c sản phẩm c&oacute; gi&aacute; cả hợp l&yacute;, chất lượng tốt v&agrave; cả dịch vụ chăm s&oacute;c kh&aacute;ch h&agrave;ng k&egrave;m theo. Đ&acirc;y l&agrave; nh&oacute;m kh&aacute;ch h&agrave;ng cần doanh nghiệp đặc biệt ch&uacute; trọng v&igrave; họ c&oacute; thể mang lại những lợi &iacute;ch d&agrave;i l&acirc;u.</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><strong>Nh&oacute;m độ tuổi từ 50 trở l&ecirc;n:</strong> nh&oacute;m kh&aacute;ch h&agrave;ng n&agrave;y thường kh&aacute; kh&oacute; t&iacute;nh trong mua h&agrave;ng v&igrave; họ chọn lọc rất kỹ. Doanh nghiệp kh&ocirc;ng chỉ cần ch&uacute; trọng v&agrave;o chất lượng sản phẩm m&agrave; cả kế hoạch cho t&acirc;m l&yacute; mua h&agrave;ng.</p>
<figure class="image"><img title="do-tuoi-phan-loai-khach-hang.webp" src="https://gofiber.b-cdn.net/Admin/do-tuoi-phan-loai-khach-hang.webp" alt="Ph&acirc;n loại kh&aacute;ch h&agrave;ng dựa v&agrave;o độ tuổi" width="800" height="571">
<figcaption>Ph&acirc;n loại kh&aacute;ch h&agrave;ng dựa v&agrave;o độ tuổi</figcaption>
</figure>
</li>
</ul>
<h3 dir="ltr">#3. Ph&acirc;n theo lợi &iacute;ch của doanh nghiệp</h3>
<p dir="ltr">Ph&acirc;n loại kh&aacute;ch h&agrave;ng theo lợi &iacute;ch của doanh nghiệp thường d&ugrave;ng để đ&aacute;nh gi&aacute; mức độ quan trọng của kh&aacute;ch h&agrave;ng đối với doanh nghiệp đ&oacute;. H&igrave;nh thức ph&acirc;n loại n&agrave;y c&oacute; thể được chia như sau:</p>
<ul>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><strong>Kh&aacute;ch h&agrave;ng quan trọng:</strong> l&agrave; nh&oacute;m kh&aacute;ch h&agrave;ng mang lại gi&aacute; trị lớn v&agrave; rất lớn cho doanh nghiệp v&agrave; c&oacute; đ&oacute;ng g&oacute;p quan trọng trong doanh số v&agrave; lợi nhuận. Chẳng hạn như đại l&yacute;. V&igrave; thế, doanh nghiệp cần đặc biệt tập trung chăm s&oacute;c nh&oacute;m kh&aacute;ch h&agrave;ng n&agrave;y th&ocirc;ng qua giảm gi&aacute; h&agrave;ng h&oacute;a, th&ecirc;m ưu đ&atilde;i&hellip;</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><strong>Nh&oacute;m kh&aacute;ch h&agrave;ng trung b&igrave;nh:</strong> nh&oacute;m kh&aacute;ch h&agrave;ng n&agrave;y thường kh&ocirc;ng qu&aacute; quan trọng trong doanh số b&aacute;n h&agrave;ng v&agrave; lợi nhuận của doanh nghiệp nhưng họ vẫn đ&oacute;ng g&oacute;p một phần nhỏ n&agrave;o đ&oacute;.</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><strong>Nh&oacute;m kh&aacute;ch h&agrave;ng kh&ocirc;ng quan trọng:</strong> đ&acirc;y l&agrave; những kh&aacute;ch h&agrave;ng kh&ocirc;ng c&oacute; đ&oacute;ng g&oacute;p nhiều v&agrave;o doanh số b&aacute;n h&agrave;ng v&agrave; lợi nhuận. Doanh nghiệp c&oacute; thể hạn chế ưu đ&atilde;i đối với nh&oacute;m n&agrave;y.</p>
<figure class="image"><img title="phan-loai-khach-hang-theo-do-quan-trong.webp" src="https://gofiber.b-cdn.net/Admin/phan-loai-khach-hang-theo-do-quan-trong.webp" alt="Ph&acirc;n loại kh&aacute;ch h&agrave;ng dựa v&agrave;o độ quan trọng" width="800" height="571">
<figcaption>Ph&acirc;n loại kh&aacute;ch h&agrave;ng dựa v&agrave;o độ quan trọng</figcaption>
</figure>
</li>
</ul>
<h3 dir="ltr">#4. Ph&acirc;n loại kh&aacute;ch h&agrave;ng theo thu nhập c&aacute; nh&acirc;n</h3>
<p dir="ltr">Ph&acirc;n loại kh&aacute;ch h&agrave;ng theo thu nhập c&oacute; thể gi&uacute;p doanh nghiệp x&aacute;c định gi&aacute; th&agrave;nh sản phẩm như thế n&agrave;o để ph&ugrave; hợp với người ti&ecirc;u d&ugrave;ng. C&aacute;ch ph&acirc;n loại n&agrave;y được chia th&agrave;nh 3 nh&oacute;m:</p>
<ul>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><strong>Nh&oacute;m kh&aacute;ch h&agrave;ng b&igrave;nh d&acirc;n:</strong> hầu hết họ quan t&acirc;m đến c&aacute;c chương tr&igrave;nh khuyến m&atilde;i, ưu đ&atilde;i v&agrave; sự đ&ograve;i hỏi của họ đối với sản phẩm kh&ocirc;ng qu&aacute; cao. Nh&oacute;m kh&aacute;ch h&agrave;ng n&agrave;y thường chiếm số đ&ocirc;ng n&ecirc;n khả năng tiếp cận của doanh nghiệp kh&ocirc;ng qu&aacute; kh&oacute; khăn.</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><strong>Nh&oacute;m kh&aacute;ch h&agrave;ng trung cấp:</strong> họ l&agrave; những người quan t&acirc;m đến gi&aacute; cả nhưng chất lượng sản phẩm cũng phải &ldquo;h&agrave;i l&ograve;ng&rdquo;. V&igrave; thế, sản phẩm đ&aacute;p ứng họ thường c&oacute; gi&aacute; trị trung b&igrave;nh. Nh&oacute;m kh&aacute;ch h&agrave;ng n&agrave;y c&oacute; thể trung th&agrave;nh với một sản phẩm miễn l&agrave; n&oacute; c&oacute; gi&aacute; hợp l&yacute; v&agrave; chất lượng như mong muốn.</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><strong>Nh&oacute;m kh&aacute;ch h&agrave;ng cao cấp: </strong>nh&oacute;m kh&aacute;ch h&agrave;ng n&agrave;y rất quan t&acirc;m đến chất lượng sản phẩm v&igrave; thế họ sẵn s&agrave;ng chi trả cho những gi&aacute; trị tương xứng với họ.</p>
</li>
</ul>
<h3 dir="ltr">#5. Ph&acirc;n nh&oacute;m kh&aacute;ch h&agrave;ng theo h&agrave;nh vi mua sắm</h3>
<p dir="ltr">H&agrave;nh vi mua sắm của kh&aacute;ch h&agrave;ng c&oacute; thể gi&uacute;p doanh nghiệp ph&acirc;n loại họ theo c&aacute;c nh&oacute;m như:</p>
<ul>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><strong>Mua h&agrave;ng v&igrave; muốn trải nghiệm: </strong>l&agrave; những kh&aacute;ch h&agrave;ng muốn &ldquo;thử&rdquo; cảm gi&aacute;c sử dụng sản phẩm, dịch vụ. Mặc d&ugrave; nh&oacute;m kh&aacute;ch h&agrave;ng n&agrave;y kh&aacute; &ldquo;cả th&egrave;m ch&oacute;ng ch&aacute;n&rdquo; nhưng chỉ cần sản phẩm chất lượng, hơn hẳn những thương hiệu kh&aacute;c nhưng c&ugrave;ng một mức gi&aacute; (hoặc sự ch&ecirc;nh lệch kh&ocirc;ng qu&aacute; lớn) th&igrave; cơ hội doanh nghiệp biến họ th&agrave;nh kh&aacute;ch h&agrave;ng trung th&agrave;nh rất cao.</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><strong>Mua h&agrave;ng v&igrave; được giới thiệu:</strong> l&agrave; nh&oacute;m kh&aacute;ch h&agrave;ng tiếp cận sản phẩm v&igrave; họ đọc được c&aacute;c b&agrave;i review tr&ecirc;n mạng, giới thiệu từ bạn b&egrave;.</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><strong>Kh&aacute;ch h&agrave;ng mua v&igrave; khuyến m&atilde;i: </strong>l&agrave; nh&oacute;m kh&aacute;ch h&agrave;ng đ&atilde; c&oacute; nhu cầu mua h&agrave;ng trước nhưng đưa ra quyết định chỉ trong dịp khuyến m&atilde;i.</p>
<figure class="image"><img title="phan-loai-khach-hang-mua-hang-vi-khuyen-mai.webp" src="https://gofiber.b-cdn.net/Admin/phan-loai-khach-hang-mua-hang-vi-khuyen-mai.webp" alt="Rất nhiều người mua h&agrave;ng v&igrave; khuyến m&atilde;i" width="800" height="571">
<figcaption>Rất nhiều người mua h&agrave;ng v&igrave; khuyến m&atilde;i</figcaption>
</figure>
</li>
</ul>
<h3 dir="ltr">#6. Ph&acirc;n theo dựa tr&ecirc;n tần suất mua h&agrave;ng</h3>
<p dir="ltr">Dựa v&agrave;o số lần mua h&agrave;ng của kh&aacute;ch h&agrave;ng, bạn c&oacute; thể ph&acirc;n loại họ theo 2 h&igrave;nh thức như sau:</p>
<ul>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><strong>Kh&aacute;ch h&agrave;ng b&igrave;nh thường: </strong>l&agrave; những kh&aacute;ch h&agrave;ng chỉ tho&aacute;ng tiếp cận được doanh nghiệp v&agrave; mua h&agrave;ng khi họ ph&aacute;t sinh nhu cầu. Nh&oacute;m kh&aacute;ch h&agrave;ng n&agrave;y kh&ocirc;ng ổn định n&ecirc;n đội ngũ marketing c&oacute; thể thực hiện c&aacute;c chiến dịch khuyến m&atilde;i để thu h&uacute;t họ mua h&agrave;ng th&ecirc;m một lần nữa.</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation"><strong>Kh&aacute;ch h&agrave;ng trung th&agrave;nh:</strong> họ l&agrave; những kh&aacute;ch h&agrave;ng mua đi mua lại sản phẩm nhiều lần v&agrave; tin tưởng tuyệt đối, lu&ocirc;n chọn sản phẩm của doanh nghiệp khi c&oacute; nhu cầu. Nh&oacute;m kh&aacute;ch h&agrave;ng n&agrave;y thường chiếm khoảng 70% tổng doanh thu b&aacute;n h&agrave;ng.</p>
</li>
</ul>
<h3 dir="ltr">#7. Ph&acirc;n nh&oacute;m ngẫu nhi&ecirc;n</h3>
<p dir="ltr">Nh&oacute;m kh&aacute;ch h&agrave;ng ngẫu nhi&ecirc;n tiếp cận doanh nghiệp một c&aacute;ch bất ngờ theo nhiều hướng kh&aacute;c nhau. Chẳng hạn như họ nhận được lời giới thiệu từ bạn b&egrave;, thấy một tờ quảng c&aacute;o khi đi tr&ecirc;n đường&hellip; Nh&oacute;m kh&aacute;ch h&agrave;ng n&agrave;y c&oacute; thể được đưa v&agrave;o nh&oacute;m kh&aacute;ch h&agrave;ng tiềm năng nếu sản phẩm l&agrave;m h&agrave;i l&ograve;ng họ.</p>
<p dir="ltr"><strong>&gt;&gt; Xem th&ecirc;m:</strong> <a href="https://gofiber.vn/phan-hoi-cua-khach-hang-la-gi">Phản hồi của kh&aacute;ch h&agrave;ng l&agrave; g&igrave;? C&aacute;ch thu thập v&agrave; xử l&yacute; Feedback hiệu quả</a></p>
<h2 dir="ltr">N&ecirc;n ph&acirc;n loại kh&aacute;ch h&agrave;ng như thế n&agrave;o?</h2>
<p dir="ltr">Nếu như c&aacute;c c&aacute;ch ph&acirc;n loại kh&aacute;ch h&agrave;ng ở tr&ecirc;n khiến bạn bối rối v&igrave; kh&ocirc;ng biết n&ecirc;n ph&acirc;n chia kh&aacute;ch h&agrave;ng của m&igrave;nh như thế n&agrave;o th&igrave; chỉ cần nhớ rằng, c&oacute; 3 nh&oacute;m người ti&ecirc;u d&ugrave;ng ch&iacute;nh m&agrave; doanh nghiệp cần ph&acirc;n chia, bao gồm:</p>
<h3 dir="ltr">Kh&aacute;ch h&agrave;ng tiềm năng</h3>
<p dir="ltr">Đ&acirc;y l&agrave; nh&oacute;m kh&aacute;ch h&agrave;ng cần sử dụng sản phẩm của doanh nghiệp trong tương lai gần. Họ l&agrave; người đ&atilde; c&oacute; nhu cầu mua h&agrave;ng nhưng c&ograve;n đang lưỡng lự, chưa quyết định. Những ch&iacute;nh s&aacute;ch gi&aacute; ph&ugrave; hợp, khuyến m&atilde;i v&agrave; chăm s&oacute;c k&egrave;m theo tận t&igrave;nh của doanh nghiệp c&oacute; thể gi&uacute;p người ti&ecirc;u d&ugrave;ng c&oacute; nhu cầu mua h&agrave;ng sớm hơn.</p>
<figure class="image"><img title="phan-loai-khach-hang-tiem-nang.webp" src="https://gofiber.b-cdn.net/Admin/phan-loai-khach-hang-tiem-nang.webp" alt="Ph&acirc;n loại kh&aacute;ch h&agrave;ng tiềm năng" width="800" height="571">
<figcaption>Ph&acirc;n loại kh&aacute;ch h&agrave;ng tiềm năng</figcaption>
</figure>
<h3 dir="ltr">Kh&aacute;ch h&agrave;ng ti&ecirc;u cực</h3>
<p dir="ltr">Những kh&aacute;ch h&agrave;ng ti&ecirc;u cực l&agrave; nh&oacute;m người ti&ecirc;u d&ugrave;ng đ&atilde; v&agrave; đang sử dụng sản phẩm, dịch vụ nhưng kh&ocirc;ng c&oacute; kế hoạch mua lại sản phẩm. Điều n&agrave;y xảy ra khi sản phẩm kh&ocirc;ng khiến họ h&agrave;i l&ograve;ng hoặc dịch vụ chăm s&oacute;c kh&aacute;ch h&agrave;ng gặp vấn đề. Trong trường hợp n&agrave;y, doanh nghiệp cần xử l&yacute; c&aacute;c vấn đề cốt l&otilde;i trước, để tr&aacute;nh lặp lại trường hợp ti&ecirc;u cực n&agrave;y trong tương lai.</p>
<p dir="ltr">Đối với kh&aacute;ch h&agrave;ng ti&ecirc;u cực, doanh nghiệp chưa cần vội loại bỏ họ khỏi danh s&aacute;ch kh&aacute;ch h&agrave;ng tiềm năng. Khi bạn đ&atilde; giải quyết được vấn đề cốt l&otilde;i rồi, việc mời họ trải nghiệm lại sản phẩm, dịch vụ vẫn chưa muộn.</p>
<h3 dir="ltr">Kh&aacute;ch h&agrave;ng trung th&agrave;nh</h3>
<p dir="ltr">Kh&aacute;ch h&agrave;ng trung th&agrave;nh l&agrave; những người mang lại doanh thu bền vững cho doanh nghiệp. Họ thường rất th&iacute;ch sản phẩm của thương hiệu. V&igrave; thế, doanh nghiệp cần ưu ti&ecirc;n ưu đ&atilde;i, chăm s&oacute;c họ nhằm giữ ch&acirc;n kh&aacute;ch h&agrave;ng.</p>
<figure class="image"><img title="phan-loai-khach-hang-trung-thanh.webp" src="https://gofiber.b-cdn.net/Admin/phan-loai-khach-hang-trung-thanh.webp" alt="Ph&acirc;n loại kh&aacute;ch h&agrave;ng theo độ trung th&agrave;nh của họ" width="800" height="571">
<figcaption>Ph&acirc;n loại kh&aacute;ch h&agrave;ng theo độ trung th&agrave;nh của họ</figcaption>
</figure>
<p dir="ltr">Nh&igrave;n chung, việc ph&acirc;n loại kh&aacute;ch h&agrave;ng cực kỳ quan trọng nếu doanh nghiệp muốn ph&aacute;t triển trong tương lai. V&igrave; thế, đừng bỏ qua những gợi &yacute; về c&aacute;ch ph&acirc;n loại về c&aacute;c nh&oacute;m kh&aacute;ch h&agrave;ng của doanh nghiệp ở tr&ecirc;n nh&eacute;!</p>`;

function renderHtmlString(htmlString: string) {
  function isHeadingElement(type: React.ElementType<any>) {
    return (
      typeof type === "string" &&
      (type === "h2" || type === "h3" || type === "h4")
    );
  }

  const parsedHtml = ReactHtmlParser(htmlString);
  const offsetInfos: any[] = [];

  const handleOffsetTop = (
    element: HTMLElement | null,
    child: ReactElement<any>
  ) => {
    if (element) {
      const { top } = element.getBoundingClientRect();
      const distanceFromTop = top + window.pageYOffset;
      const offsetHeight = element.offsetHeight;
      offsetInfos.push({ element: child, distanceFromTop, offsetHeight });
    }
  };

  const modifiedHtml =
    (React.Children.map(parsedHtml, (child) => {
      if (
        React.isValidElement(child) &&
        isHeadingElement(child.type as ElementType)
      ) {
        return React.cloneElement(child as ReactElement<any>, {
          ref: (element: HTMLElement | null) => handleOffsetTop(element, child),
        });
      }
      return child;
    }) as ReactNode[]) || [];

  return { modifiedHtml, offsetInfos };
}

function getAttributesFromArray<T, K extends keyof T>(
  arr: T[],
  attr: K
): T[K][] {
  return arr.map((obj) => obj[attr]);
}

function addIdsToHeadings(html: string): string {
  const $ = load(html);
  let h2Index = 0;
  let h3Index = 0;
  let h4Index = 0;

  $("h2").each((i, el) => {
    h2Index++;
    h3Index = 0;
    $(el).attr("id", `section-${h2Index}`);

    $(el)
      .nextUntil("h2", "h3")
      .each((j, subEl) => {
        h3Index++;
        h4Index = 0;
        $(subEl).attr("id", `section-${h2Index}-${h3Index}`);

        $(subEl)
          .nextUntil("h3, h2", "h4")
          .each((k, subSubEl) => {
            h4Index++;
            $(subSubEl).attr("id", `section-${h2Index}-${h3Index}-${h4Index}`);
          });
      });
  });
  // @ts-ignore
  return $.html($("body").html());
}

function getHeadingsContent(html: string, offsets: number[]): IContentItem[] {
  const $ = load(html);
  const headings: IContentItem[] = [];

  $("h2").each((i, h2) => {
    const h2Text = $(h2).text();
    const h3Elements = $(h2).nextUntil("h2", "h3");
    const h3TextArr: IContentItem["h3"] = [];

    h3Elements.each((j, h3) => {
      const h3Text = $(h3).text();
      const h4Elements = $(h3).nextUntil("h3", "h4");
      // @ts-ignore
      const h4TextArr: IContentItem["h4"] = [];

      h4Elements.each((k, h4) => {
        h4TextArr.push({
          content: $(h4).text(),
          offset: offsets.shift() || 0,
        });
      });

      // @ts-ignore
      const h3Content: IContentItem["h3"][number] = {
        h3: {
          content: h3Text,
          offset: offsets.shift() || 0,
        },
        h4: h4TextArr.length ? h4TextArr : undefined,
      };

      h3TextArr.push(h3Content);
    });

    const heading: IContentItem = {
      h2: {
        content: h2Text,
        offset: offsets.shift() || 0,
      },
      h3: h3TextArr.length ? h3TextArr : undefined,
    };

    headings.push(heading);
  });

  return headings;
}

function countHeadings(html: string): number {
  let result = 0;
  const $ = load(html);
  const h2Count = $("h2").length;
  const h3Count = $("h3").length;
  result = h2Count + h3Count;
  return result;
}

const connections = [
  {
    link: "/",
    image: "/images/social/youtube.png",
  },
  {
    link: "/",
    image: "/images/social/tiktok.png",
  },
  {
    link: "/",
    image: "/images/social/zalo.png",
  },
];

function PostPage() {
  const { modifiedHtml, offsetInfos } = renderHtmlString(
    addIdsToHeadings(data)
  );
  const [tableContents, setTableContents] = useState<IContentItem[]>([]);
  const [numberOfHeadings, setNumberOfHeadings] = useState(0);

  useEffect(() => {
    const offsets = getAttributesFromArray(offsetInfos, "distanceFromTop");
    setTableContents((prev) => getHeadingsContent(data, offsets));
    setNumberOfHeadings(countHeadings(data));
  }, []);

  return (
    <>
      <Breadcrumb
        data={[
          {
            title: "Blogs",
            link: "/blogs",
          },
          {
            title: "Góc Ẩm Thực",
            link: "/blogs/1",
          },
          {
            title:
              "Cách làm món ghẹ nấu rau muống thơm ngon, đơn giản cho bữa cơm gia đình",
            link: "/blogs/1",
          },
        ]}
      />
      <main className="container mx-auto">
        <div className="grid grid-cols-12 justify-center">
          <div className="mt-8 col-span-12 lg:col-span-10 col-start-1 lg:col-start-2">
            <div className="text-secondary text-[14px] leading-[22px] mb-1">
              Góc Ẩm Thực
            </div>
            <div className="uppercase text-orangeFF font-semibold text-[16px] lg:text-[24px] leading-[32px]">
              Cách làm món ghẹ nấu rau muống thơm ngon, đơn giản cho bữa cơm gia
              đình
            </div>
          </div>

          <div className="mt-8 col-span-12 lg:col-span-10 col-start-1 lg:col-start-2">
            <TableOfContent data={tableContents} />
          </div>

          <div
            id="content"
            className="mt-8 col-span-12 lg:col-span-10 col-start-1 lg:col-start-2"
          >
            {ReactHtmlParser(addIdsToHeadings(data))}
          </div>

          <div className="col-span-12 lg:col-span-10 col-start-1 lg:col-start-2 mt-6">
            <div className="">
              <div className="w-full flex items-center justify-between bg-[#FF6100] px-3 py-2">
                <div className="flex items-center gap-x-2">
                  <div className="min-w-[8px] max-h-[8px] rounded-full bg-white">
                    &nbsp;
                  </div>
                  <div className="text-white font-semibold font-base">
                    FREESHIP cho đơn hàng từ 700.000đ
                  </div>
                </div>
                <div className="flex items-center gap-x-4">
                  <div className="text-center text-white">
                    <div>
                      Xem thêm <strong>300+</strong>
                    </div>
                    <div>sản phẩm khuyến mãi</div>
                  </div>
                  <button className="p-1 rounded-full border border-white border-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M14 16.5L18 12.5M18 12.5L14 8.5M18 12.5L6 12.5"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-2 grid grid-cols-6 bg-[#FF943F] gap-4">
                {[
                  "banner006",
                  "banner007",
                  "banner008",
                  "banner009",
                  "banner010",
                  "banner011",
                ].map((item) => (
                  <div key={item} className="">
                    <img src={`/images/bannerOfGeneral/${item}.png`} className="w-full h-auto" />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-x-8 pl-[16px] mt-4">
              <div className="relative border border-orangeFF pl-[32px] pr-[16px] py-1 rounded-[30px] cursor-pointer text-orangeFF text-sm font-semibold">
                <img
                  src="/images/social/facebook.png"
                  alt="Facebook"
                  className="w-[36px] h-[36px] absolute left-[-16px] top-[-3px]"
                />

                <span>Chia sẻ Facebook</span>
              </div>

              <div className="relative border border-orangeFF pl-[32px] pr-[16px] py-1 rounded-[30px] cursor-pointer text-orangeFF text-sm font-semibold">
                <img
                  src="/images/social/messenger.png"
                  alt="Messenger"
                  className="w-[36px] h-[36px] absolute left-[-16px] top-[-3px]"
                />

                <span>Chat với CUABIEN nếu bạn cần tư vấn</span>
              </div>
            </div>

            <div className="mt-4 border border-[#F1F2F2] px-3 py-1">
              <div>Kết nối với CUABIEN</div>

              <div className="flex items-center gap-4 mt-1">
                {connections?.map((item, index) => (
                  <Link
                    href={item.link}
                    key={index}
                    className="w-[40px] h-[40px] rounded-full border flex items-center justify-center"
                  >
                    <img src={item.image} className="" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-4 border border-[#F1F2F2] px-3 py-1">
              <div>Từ khóa:</div>

              <div className="flex items-center gap-4 mt-1"></div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="text-orangeFF text-[18px] font-semibold">
            BÀI VIẾT LIÊN QUAN
          </div>

          <div className="mt-4 grid grid-cols-12 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="col-span-12 md:col-span-6 lg:col-span-4"
              >
                <BlogItem />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default React.memo(PostPage);
