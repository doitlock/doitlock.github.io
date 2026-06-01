import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { keyProjects } from '../data/projects';
import { useModal } from '../context/ModalContext';

// 메인 상단 Key Projects 캐러셀 (기존 Swiper #kpGrid 이식)
export default function KeyProjects() {
  const { openModal } = useModal();

  return (
    <section className="section key-projects" id="key-projects">
      <div>
        <div className="section-header color2">
          <span className="section-num">💡</span>
          <div className="section-line-el"></div>
          <h2 className="section-title">Key Projects</h2>
        </div>
        <Swiper
          className="kp-grid"
          modules={[Navigation, Pagination]}
          slidesPerView="auto"
          centeredSlides
          spaceBetween={16}
          speed={800}
          pagination={{ clickable: true }}
          navigation
        >
          {keyProjects.map((kp) => (
            <SwiperSlide className="kp-card" key={kp.id} onClick={() => openModal(kp.id)}>
              <p className="kp-tag">{kp.tag}</p>
              <h3 className="kp-name">{kp.name}</h3>
              <p className="kp-period">{kp.period}</p>
              <p className="kp-desc">{kp.desc}</p>
              <div className="kp-thumb">
                <img src={kp.thumb} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
