# PMP Performance — development build 0.1.0

هذه نسخة تطوير وليست ثيمًا معتمدًا أو منشورًا في سلة.

## التثبيت الرسمي
1. إنشاء مستودع GitHub خاص باسم pmp-performance-theme ورفع محتويات هذا المجلد إليه.
2. ضبط repository في twilight.json وpackage.json إلى رابط المستودع الفعلي.
3. ربط المستودع بحساب شركاء سلة واستيراده كثيم Twilight خاص.
4. تشغيل pnpm install --frozen-lockfile ثم pnpm production.
5. معاينة الثيم باستخدام Salla CLI في متجر تجريبي، ثم إضافة عنصري PMP للبنر وبوابات الأقسام.
6. استبدال روابط بوابات الأقسام الافتراضية بروابط تصنيفات المتجر الفعلية بعد إنشائها.
7. إرسال طلب تثبيت/نشر من شركاء سلة وفق متطلبات المراجعة.

## حالة التحقق
- نجح pnpm run production بتاريخ 2026-09-11؛ تبقت تحذيرات Sass وأحجام الحزم من الأساس الأصلي.
- اجتاز JSON وgit diff --check الفحص.
- هذه نسخة تطوير أولية؛ لم تُجرَ معاينة بصرية داخل محرك Twilight بعد.
- وظائف المنتجات والسلة والطلبات والحسابات مستندة إلى مشروع SallaApp/theme-raed الرسمي.
- التصميم الخاص موجود في src/assets/styles/pmp.scss ومكوني home.pmp-hero وhome.pmp-departments.
- يجب اختبار Twig على محرك سلة، وتوافق التطبيقات، وخيارات المنتجات، والسلة، والجوال قبل النشر.
- لا يوجد اعتماد من سلة، ولم يتم تأكيد أهلية باقة Plus للثيم الخاص أو رسوم التثبيت.
- بوابات الأقسام الافتراضية تقود إلى المنتجات حتى يتم تحديد تصنيفات حقيقية.
- لا يتم إنشاء تصنيفات أو تعديل أسعار/مخزون من ملفات الثيم.

## المصدر
Built upon SallaApp/theme-raed (MIT declared in upstream package.json). Upstream README and source retained. PMP adaptations: 2026-09-11.
https://github.com/SallaApp/theme-raed
https://docs.salla.dev/421880m0
