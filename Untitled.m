clear; clc; close all;
c        = 3e8;
Pt_dB   = 0;  Gt_dB   = 1;  Gr_dB   = 1;
Gt  = 10^(Gt_dB/10);
Gr  = 10^(Gr_dB/10);

frequency  = [2.4e9, 5e9];
labels   = {'2.4 GHz','5 GHz'};
d = linspace(1, 100, 500);
figure('Color','w','Position',[100 100 1100 420]);

%Solution of Problem 1
subplot(1,2,1); hold on; grid on;
for k = 1:numel(frequency)
    lambda = c / frequency(k);
    Pt = 1e-3;
    Pr  = Pt  .* Gt .* Gr .* (lambda ./ (4*pi*d)).^2;
    plot(d, Pr, 'LineWidth', 1.6, 'DisplayName', labels{k});
end
xlabel('Distance d (m)');
ylabel('Received Power P_r (W)');
title('Received Power vs Distance (Linear)');
legend('Location','southwest');

%Solution of Problem 2
subplot(1,2,2); hold on; grid on;
for k = 1:numel(frequency)
    lambda = c / frequency(k);
    Lfs_dB = 20*log10(4*pi*d./lambda);
    Pr_dB = Pt_dB + Gt_dB + Gr_dB - Lfs_dB;
    plot(d, Pr_dB, 'LineWidth', 1.6, 'DisplayName', labels{k});
end
xlabel('Distance d (m)');
ylabel('Received Power P_r (dBm)');
title('Received Power vs Distance (dBm)');
legend('Location','northeast');