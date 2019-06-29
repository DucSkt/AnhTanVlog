import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Container, Jumbotron, Row } from 'reactstrap';

class Jumbotrons extends Component {

  constructor(props) {
    super(props);

    this.state = { // initial state
      news: []
    }
  }

  componentDidMount() {
    // news will receive from API instead of fixed data;
    const news = [
      {
        "title": "Thủ tướng Abe đãi tiệc lãnh đạo G20 tại lâu đài Osaka",
        "thumbnail": "https://i-vnexpress.vnecdn.net/2019/06/29/osaka-1561786725-2819-1561793236_500x300.jpg",
        "content": `Các lãnh đạo G20 khép lại ngày đầu tiên của hội nghị bằng màn biểu diễn nghệ thuật truyền thống của Nhật Bản và tiệc ẩm thực địa phương.

        Thủ tướng Nhật Bản Shinzo Abe và phu nhân Akie tối 28/6 tổ chức tiệc chiêu đãi các lãnh đạo G20 tại lâu đài Osaka. Tổng thống Mỹ Trump là lãnh đạo đến cuối cùng, muộn hơn một giờ so với dự kiến.
        
        Ông trò chuyện với Thái tử Arab Saudi Mohammed bin Salman và Đệ nhất phu nhân Pháp Brigitte Macron khi các nhà lãnh đạo tập trung chụp ảnh lưu niệm trước lâu đài Osaka trong tiếng trống taiko.
        
        Họ sau đó thưởng thức buổi biểu diễn nghệ thuật ca kịch truyền thống của Nhật Bản do nghệ sĩ nổi tiếng Nomura Mansai thể hiện tại một sân khấu ngoài trời. Mansai sẽ là người giám sát lễ khai mạc và bế mạc Thế vận hội Olympic và Paralympic Tokyo 2020.
        
        Nghệ sĩ piano mù Nobuyuki Tsujii sau đó biểu diễn "Hana wa saku" (Những bông hoa sẽ nở), bài hát được sáng tác để gây quỹ tái thiết sau thảm hoạ động đất - sóng thần ở đông bắc Nhật Bản năm 2011. Các nghệ sĩ Nhật Bản biểu diễn thêm một số tiết mục trước khi các lãnh đạo di chuyển vào phòng tiệc. 
        
        Thủ tướng Abe đã có bài phát biểu ngắn và mời các quan khách nâng cốc khai tiệc. Thực đơn bữa tiệc gồm các món đặc sản Osaka cùng thịt bò wagyu hảo hạng và cá cần câu chiên, tráng miệng với đào, bánh xốp và trà xanh.
        
        Hội nghị G20 tại Osaka diễn ra trong hai ngày 28-29/6, quy tụ lãnh đạo từ 19 nền kinh tế lớn của thế giới, Liên minh châu Âu và một số nước khách mời để thảo luận về nhiều vấn đề, trong đó có thương mại toàn cầu, việc làm, phụ nữ, năng lượng và biến đổi khí hậu. `,

      },
      {
        "title": "Putin: Nga sẽ làm tất cả để cải thiện quan hệ với Mỹ",
        "thumbnail": "https://i-vnexpress.vnecdn.net/2019/06/29/pu2-1782-1561801286.jpg",
        "content": `Tổng thống Nga bày tỏ thiện chí với Washington khi gặp Trump tại G20, đồng thời cho biết hai bên sẽ thảo luận về kiểm soát vũ khí hạt nhân.
        
        Tổng thống Nga Vladimir Putin hôm nay cho biết Nga sẽ làm tất cả những gì có thể để cải thiện quan hệ với Mỹ, song việc quyết định cách nào tốt nhất để xây dựng quan hệ với Moskva là "tuỳ thuộc vào Washington".

        Putin cho biết thêm ngoại trưởng hai bên sẽ bắt đầu thảo luận về kiểm soát vũ khí hạt nhân nhưng không nói rõ thời điểm. "Chúng tôi đã yêu cầu các ngoại trưởng bắt đầu đàm phán về chủ đề này nhưng chúng tôi chưa thể nói liệu điều này có dẫn đến việc gia hạn START3 hay không", Putin nói.

        START3 là một thoả thuận được đề xuất khi các đàm phán giữa hai nước bị phá vỡ nhiều năm trước. Được kỳ vọng là sự kế thừa các thoả thuận trước đó, START3 đòi hỏi cả Mỹ và Nga giảm số lượng vũ khí hạt nhân được triển khai.

        Hai nước đang thực hiện hiệp ước New START ký năm 2010, trong đó đề ra số lượng đầu đạn hạt nhân thấp hơn mức ở thời Chiến tranh lạnh. Khi hiệp ước này hết hạn vào 2021, Putin kêu gọi Mỹ đàm phán việc gia hạn, cho rằng nếu Washington không thực hiện được thì sẽ là mối nguy với việc kiểm soát vũ khí.

        Trước đó, khi gặp nhau bên lề Hội nghị thượng đỉnh G20 tại Osaka, Nhật Bản, Tổng thống Nga đã mời Tổng thống Mỹ Donald Trump đến Moskva dự lễ duyệt binh kỷ niệm 75 năm ngày Chiến thắng phát xít ngày 7/5/2020. 

        Truyền thông Nga cho biết Tổng thống Mỹ đã phản hồi "một cách rất tích cực" với lời mời này. Trump đã ca ngợi mối quan hệ "rất tốt đẹp" với Putin trong lần gặp đầu tiên kể từ sau hội nghị thượng đỉnh ở Helsinki, Phần Lan vào tháng 7 năm ngoái.

        Nga hồi tháng ba đình chỉ tuân thủ Hiệp ước Các lực lượng hạt nhân tầm trung (INF) với Mỹ sau khi chính quyền Trump tuyên bố từ bỏ hiệp ước với cáo buộc Nga vi phạm các điều khoản. Hiệp ước INF được Washington và Moskva ký từ năm 1987, trong đó cấm hai bên phát triển mọi loại tên lửa hành trình phóng từ mặt đất có tầm bắn 500-5.500 km. Nhiều đồng minh của Mỹ lo ngại việc hiệp ước INF bị hủy bỏ sẽ châm ngòi cho cuộc chạy đua vũ trang mới và đặt châu Âu vào tầm ngắm của nhiều loại tên lửa hạt nhân.
`,
      }
    ];

    news.forEach(e => e.isEnableReadMore = true); // enable Read-More for all item 
    this.setState({
      news
    });
  }

  showFullContent(data) {
    console.log(data);
    data.isEnableReadMore = false;
    this.setState({
      news: this.state.news
    }); // force rerender view
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          {/* <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Jumbotron</strong>
                <div className="card-header-actions">
                  <a href="https://reactstrap.github.io/components/jumbotron/" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
                <Jumbotron>
                  <h1 className="display-3">Hello, world!</h1>
                  <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra
                    attention to featured content or information.</p>
                  <hr className="my-2" />
                  <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                  <p className="lead">
                    <Button color="primary">Learn More</Button>
                  </p>
                </Jumbotron>
              </CardBody>
            </Card>
          </Col> */}
          {this.state.news.map(data => (
            <Col xs="12">
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i><strong>News</strong>
                  {/* <small> fluid</small> */}
                </CardHeader>
                <CardBody>
                  <Jumbotron fluid>
                    <Container fluid>
                      <h1 className="display-4">{data.title}</h1>
                      <div className="thumbnail" style={{ textAlign: "center" }}>
                        <img src={data.thumbnail} style={{ width: "100%" }}>
                        </img>
                      </div>
                      <br />
                      <p className={data.isEnableReadMore ? 'truncate-content' : 'content'} dangerouslySetInnerHTML={{ __html: data.content }}></p>
                      {data.isEnableReadMore && (
                        <p className="lead">
                          <Button color="primary" onClick={() => this.showFullContent(data)}>Read More</Button>
                        </p>
                      )}
                    </Container>
                  </Jumbotron>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Jumbotrons;
