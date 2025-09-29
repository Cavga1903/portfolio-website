import { NextResponse } from 'next/server';
import { ContactFormData } from '@/types';

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, subject, message } = body;

    // Form validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tüm alanlar zorunludur.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Geçerli bir email adresi giriniz.' },
        { status: 400 }
      );
    }

    // Log the contact form submission
    console.log('Yeni İletişim Formu Mesajı:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || 'unknown'
    });

    // TODO: Bu aşamada aşağıdaki işlemlerden birini veya birkaçını yapabilirsiniz:
    // 1. Veritabanına kaydetme (MongoDB, PostgreSQL, vb.)
    // 2. Email gönderme (Nodemailer, SendGrid, vb.)
    // 3. Webhook'a gönderme (Zapier, Make, vb.)
    // 4. Loglama servisine gönderme (LogRocket, Sentry, vb.)

    // Örnek: Email gönderme (Nodemailer ile)
    // const nodemailer = require('nodemailer');
    // const transporter = nodemailer.createTransporter({
    //   service: 'gmail',
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS
    //   }
    // });
    // 
    // await transporter.sendMail({
    //   from: process.env.EMAIL_USER,
    //   to: 'tolgacavga@example.com',
    //   subject: `Portfolyo İletişim: ${subject}`,
    //   html: `
    //     <h2>Yeni İletişim Formu Mesajı</h2>
    //     <p><strong>Ad Soyad:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Konu:</strong> ${subject}</p>
    //     <p><strong>Mesaj:</strong></p>
    //     <p>${message.replace(/\n/g, '<br>')}</p>
    //   `
    // });

    return NextResponse.json({
      success: true,
      message: 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.'
    });

  } catch (error) {
    console.error('İletişim formu hatası:', error);
    return NextResponse.json(
      { error: 'Bir sunucu hatası oluştu. Lütfen tekrar deneyin.' },
      { status: 500 }
    );
  }
}

// OPTIONS method for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
