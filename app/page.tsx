"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import {
  Zap,
  Shield,
  Receipt,
  Smartphone,
  CheckCircle2,
  QrCode,
  ArrowDown,
} from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    amount: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-donation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        alert("Cảm ơn! Em sẽ nhớ ơn bạn mỗi khi đói bụng.");
        setFormData({ name: "", contact: "", amount: "", message: "" });
      } else {
        alert("Có lỗi xảy ra. Vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Có lỗi xảy ra. Vui lòng thử lại.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-zinc-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 bg-linear-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent">
          NUÔI TBAN
        </h1>

        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-2xl md:text-3xl font-bold text-zinc-800 mb-3">
            Dự án phi lợi nhuận.
          </p>
          <p className="text-xl md:text-2xl text-zinc-700 mb-4">
            Giúp một con người tài năng nhưng nghèo khó tiếp tục tồn tại.
          </p>
          <p className="text-sm md:text-base text-zinc-600 italic">
            Minh bạch 100%. Sao kê chi li từng đồng.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-zinc-900 hover:bg-zinc-800 text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
            onClick={() =>
              document
                .getElementById("donate")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            HÃY NUÔI EM ĐI
          </Button>
        </div>

        <Button
          variant="link"
          className="text-zinc-600 hover:text-zinc-900 underline inline-flex items-center gap-2"
          onClick={() =>
            document
              .getElementById("why")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Tìm hiểu kỹ hơn
          <ArrowDown className="w-4 h-4" />
        </Button>
      </section>

      {/* Why You Should Feed Me */}
      <section id="why" className="container mx-auto px-4 py-16 md:py-20">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-zinc-900">
          VÌ SAO NÊN TIN EM?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card className="border-2 hover:border-zinc-900 transition-all hover:shadow-lg">
            <CardContent className="p-6">
              <Zap className="w-10 h-10 mb-4 text-zinc-900" />
              <h3 className="text-xl font-bold mb-3 text-zinc-900">
                Cập Nhật Tức Thời
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                Live tracking chi tiêu mỗi ngày. Bạn biết em mua gì, ở đâu, lúc
                mấy giờ. Thậm chí cả việc em có xin thêm rau không.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-zinc-900 transition-all hover:shadow-lg">
            <CardContent className="p-6">
              <Shield className="w-10 h-10 mb-4 text-zinc-900" />
              <h3 className="text-xl font-bold mb-3 text-zinc-900">
                Minh Bạch Tuyệt Đối
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                Không một khoản chi nào được giấu. Từ bát phở sáng đến chai nước
                chiều. Có ảnh, có giờ, có địa điểm.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-zinc-900 transition-all hover:shadow-lg">
            <CardContent className="p-6">
              <Receipt className="w-10 h-10 mb-4 text-zinc-900" />
              <h3 className="text-xl font-bold mb-3 text-zinc-900">
                Hóa Đơn Đầy Đủ
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                Mỗi giao dịch đều có bill đính kèm. Không bill? Không chi. Đơn
                giản vậy thôi. Em nghèo nhưng có nguyên tắc.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-zinc-900 transition-all hover:shadow-lg">
            <CardContent className="p-6">
              <Smartphone className="w-10 h-10 mb-4 text-zinc-900" />
              <h3 className="text-xl font-bold mb-3 text-zinc-900">
                Dashboard Theo Dõi
              </h3>
              <p className="text-zinc-600 leading-relaxed">
                Xem chi tiết mọi khoản tiêu qua app. Biểu đồ, thống kê, phân
                tích. Như kiểm soát ngân sách công ty, nhưng cho một người đói.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Golden Commitments */}
      <section className="bg-zinc-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
            CAM KẾT CỦA EM
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex gap-4 items-start">
              <CheckCircle2 className="shrink-0 w-8 h-8 text-yellow-400" />
              <div>
                <p className="text-lg md:text-xl font-semibold mb-1">
                  Báo cáo hàng ngày
                </p>
                <p className="text-zinc-400 text-sm md:text-base">
                  Mỗi tối 9h, bạn nhận được bản tổng kết chi tiêu trong ngày. Kể
                  cả ngày lễ, tết, hoặc khi em quên ăn sáng.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <CheckCircle2 className="shrink-0 w-8 h-8 text-yellow-400" />
              <div>
                <p className="text-lg md:text-xl font-semibold mb-1">
                  Từ chối mọi hình thức gian lận
                </p>
                <p className="text-zinc-400 text-sm md:text-base">
                  Không báo giá ảo. Không chi chung rồi tính riêng. Không "ước
                  tính". Chỉ có số thật từ hóa đơn thật.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <CheckCircle2 className="shrink-0 w-8 h-8 text-yellow-400" />
              <div>
                <p className="text-lg md:text-xl font-semibold mb-1">
                  Có trách nhiệm với từng đồng bạn gửi
                </p>
                <p className="text-zinc-400 text-sm md:text-base">
                  Mỗi khoản chi đều được cân nhắc kỹ lưỡng. Em không bao giờ
                  phung phí. Tiền của bạn là mạng sống của em.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <CheckCircle2 className="shrink-0 w-8 h-8 text-yellow-400" />
              <div>
                <p className="text-lg md:text-xl font-semibold mb-1">
                  Luôn sẵn sàng giải trình
                </p>
                <p className="text-zinc-400 text-sm md:text-base">
                  Thắc mắc tại sao hôm nay chi nhiều? Inbox em bất cứ lúc nào.
                  Em trả lời nhanh hơn cả shipper gọi xác nhận đơn.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <CheckCircle2 className="shrink-0 w-8 h-8 text-yellow-400" />
              <div>
                <p className="text-lg md:text-xl font-semibold mb-1">
                  Xin lỗi nếu phát hiện sai sót
                </p>
                <p className="text-zinc-400 text-sm md:text-base">
                  Nếu có bất kỳ khoản chi nào không rõ ràng, em sẽ xin lỗi.
                  Không cãi, không giải thích dài dòng, không hoàn tiền. EM SẼ
                  XIN LỖI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-zinc-900">
            HÃY GIÚP EM SỐNG SÓT
          </h2>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto">
            Mỗi đồng bạn gửi sẽ trở thành năng lượng để em tiếp tục tồn tại. Và
            được báo cáo đầy đủ, đương nhiên rồi.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form */}
          <Card className="border-2">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-zinc-700">
                    Tên (tùy chọn)
                  </label>
                  <Input
                    type="text"
                    placeholder="Ẩn danh cũng được"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-zinc-700">
                    Email hoặc SĐT (tùy chọn)
                  </label>
                  <Input
                    type="text"
                    placeholder="Để em cảm ơn bạn"
                    value={formData.contact}
                    onChange={(e) =>
                      setFormData({ ...formData, contact: e.target.value })
                    }
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-zinc-700">
                    Số tiền đã donate (VNĐ)
                  </label>
                  <Input
                    type="text"
                    placeholder="Ví dụ: 50000"
                    value={formData.amount}
                    onChange={(e) =>
                      setFormData({ ...formData, amount: e.target.value })
                    }
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-zinc-700">
                    Lời nhắn
                  </label>
                  <Textarea
                    placeholder="Muốn nói gì với em không? Động viên, chê bai, hay chỉ đơn giản là 'ăn đi'..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-zinc-900 hover:bg-zinc-800 text-white py-6 text-lg font-bold disabled:opacity-50"
                >
                  {isSubmitting ? "Đang gửi..." : "Gửi lời nhắn"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* QR Code */}
          <Card className="border-2">
            <CardContent className="p-6 flex flex-col items-center justify-center h-full">
              <p className="text-lg font-bold mb-4 text-center text-zinc-900">
                Quét mã để chuyển khoản
              </p>

              <div className="w-64 h-64 bg-zinc-100 border-2 border-zinc-300 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                <img
                  src="/qr.jpg"
                  alt="QR Code chuyển khoản"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="text-center">
                <p className="text-base text-zinc-700 mb-2">
                  Số tiền tùy tâm. Không ép buộc.
                </p>
                <p className="text-sm text-zinc-600">
                  20k cũng đủ cho một bữa cơm rồi. Nghiêm túc đấy.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-zinc-600">Cảm ơn bạn đã tin tưởng.</p>
          <p className="text-sm text-zinc-500 mt-2">
            Dù donate hay không, em vẫn sống. Nhưng có donate thì sống khỏe hơn.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-zinc-400">
            © 2025 NUÔI EM. Dự án cá nhân. Minh bạch. Không lừa đảo.
          </p>
        </div>
      </footer>
    </div>
  );
}
